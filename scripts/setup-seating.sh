#!/usr/bin/env bash
# One-shot setup for the seating chart. Run it from the project root:
#
#   bash scripts/setup-seating.sh
#
# It logs you into Cloudflare, creates the database, wires its id into
# wrangler.toml, creates the tables, sets your admin password and deploys.
# Safe to re-run — it skips anything already done.

set -euo pipefail
cd "$(dirname "$0")/.."

DB_NAME="shul-seating"
say() { printf '\n\033[1m==> %s\033[0m\n' "$1"; }
die() { printf '\n\033[31mStopped: %s\033[0m\n' "$1" >&2; exit 1; }

[ -f wrangler.toml ] || die "run this from the project root (no wrangler.toml here)."

say "1/5  Cloudflare login"
if npx wrangler whoami 2>/dev/null | grep -q "not authenticated"; then
  npx wrangler login
else
  echo "Already logged in."
fi

say "2/5  Database"
current_id=$(grep -E '^database_id' wrangler.toml | head -1 | cut -d'"' -f2)
if [ "$current_id" = "REPLACE_WITH_D1_DATABASE_ID" ] || [ -z "$current_id" ]; then
  echo "Creating '$DB_NAME'…"
  out=$(npx wrangler d1 create "$DB_NAME" 2>&1) || {
    echo "$out"
    die "could not create the database. If it already exists, run
       npx wrangler d1 list
     and paste its id into wrangler.toml by hand, then re-run this script."
  }
  echo "$out"

  # Pull the uuid out of whatever shape wrangler printed it in.
  db_id=$(printf '%s' "$out" | grep -oE '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}' | head -1)
  [ -n "$db_id" ] || die "the database was created but its id wasn't in the output.
     Run 'npx wrangler d1 list', copy the id, and paste it into wrangler.toml
     in place of REPLACE_WITH_D1_DATABASE_ID. Then re-run this script."

  # Only ever replace the placeholder, so a re-run can't clobber a real id.
  perl -pi -e "s/REPLACE_WITH_D1_DATABASE_ID/$db_id/" wrangler.toml
  echo "Wrote database_id $db_id into wrangler.toml"
else
  echo "wrangler.toml already points at $current_id — leaving it alone."
fi

say "3/5  Tables"
npx wrangler d1 execute "$DB_NAME" --remote --file=./schema.sql

say "4/5  Admin password"
echo "This is what unlocks /seats/admin/. Type it when prompted (it stays hidden)."
echo "If you've already set it and don't want to change it, press Ctrl-C now —"
echo "everything above is saved, and you can finish with: npm run build && npx wrangler deploy"
npx wrangler secret put ADMIN_TOKEN

say "5/5  Build and deploy"
npm run build
npx wrangler deploy

cat <<'DONE'

===============================================================
 Live. Next, in this order:

 1. Open  /seats/admin/  and place the seats you've promised.
 2. Pay ₪200 yourself on the Cardcom link and go through the
    whole flow, so you see what the confirmation number looks
    like on a real receipt before anyone else does.
 3. Free your test seat in /seats/admin/.
 4. Post the /seats/ link to the WhatsApp group.
===============================================================
DONE
