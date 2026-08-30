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

-- One Cardcom confirmation number buys one seat. The UNIQUE key here is what
-- stops the sign-up link being forwarded around the WhatsApp group.
CREATE TABLE IF NOT EXISTS receipts (
  receipt    TEXT PRIMARY KEY,
  created_at TEXT NOT NULL
);
