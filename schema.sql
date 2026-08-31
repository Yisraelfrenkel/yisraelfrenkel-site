-- Seating database. Apply with:
--   npx wrangler d1 execute shul-seating --remote --file=./schema.sql

CREATE TABLE IF NOT EXISTS claims (
  id         TEXT PRIMARY KEY,   -- 'M12' / 'W7', matches src/data/seating.js
  section    TEXT NOT NULL,
  number     INTEGER NOT NULL,
  name       TEXT NOT NULL,
  phone      TEXT NOT NULL DEFAULT '',
  receipt    TEXT NOT NULL DEFAULT '',
  note       TEXT NOT NULL DEFAULT '',
  claimed_at TEXT NOT NULL
);

-- One Cardcom confirmation number, one payment. seats_allowed is 1 for a
-- single seat and 2 for the pair price; seats_used counts what has been taken
-- against it. This is what stops the sign-up link being forwarded around the
-- WhatsApp group and used by people who never paid.
CREATE TABLE IF NOT EXISTS receipts (
  receipt       TEXT PRIMARY KEY,
  seats_allowed INTEGER NOT NULL DEFAULT 1,
  seats_used    INTEGER NOT NULL DEFAULT 0,
  created_at    TEXT NOT NULL
);
