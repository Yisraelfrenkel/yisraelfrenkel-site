/* ---------------------------------------------------------------------------
   SEATING CHART — the one file you edit.

   HOW THE GRID WORKS
   The room is drawn on a grid. `col` is left→right, `row` is top→bottom,
   both starting at 1. `cols` / `rows` are how many grid cells wide/tall the
   block is. Seats inside a block are laid out left→right, then top→bottom.

   Everything on the page — the picture, the numbers, the sign-up list, the
   database — is generated from this file. Change a number here and the whole
   thing follows. Nothing else needs touching.

   SEAT NUMBERING
   Blocks are numbered in the order they appear in the arrays below. Men get
   1..N, women get 1..N (each section starts at 1). Move a block up or down in
   the array and the numbers renumber automatically — so once you've published
   the chart, DON'T reorder blocks.
--------------------------------------------------------------------------- */

export const config = {
  // Shown at the top of the page.
  shulName: "Beis Medrash",
  season: "Yamim Noraim 5787",

  // The Cardcom payment link. People are sent here first; the sign-up link is
  // what they receive after paying.
  paymentUrl: "https://secure.cardcom.solutions/REPLACE_WITH_YOUR_LINK",
  priceLabel: "₪REPLACE per seat",

  // The private sign-up page. Anyone with this link can take a seat, so it
  // belongs only on the Cardcom receipt / thank-you page — never in WhatsApp.
  // Change this string any time to invalidate the old link.
  claimPath: "/seats/claim-5787-kesser",

  // Who to call when something goes wrong.
  contactName: "REPLACE — gabbai name",
  contactWhatsapp: "https://wa.me/972000000000",
};

/* The grid the room is drawn on. */
export const grid = { cols: 26, menRows: 11, womenRows: 8 };

/* Fixtures — the things that aren't seats. Purely for orientation. */
export const fixtures = {
  men: [
    { label: "Aron Kodesh", col: 10, row: 1, cols: 8, rows: 1, kind: "aron" },
    { label: "Amud / Chazan", col: 19, row: 3, cols: 4, rows: 1, kind: "amud" },
    { label: "Bima", col: 11, row: 6, cols: 6, rows: 2, kind: "bima" },
    { label: "Seforim", col: 1, row: 1, cols: 2, rows: 3, kind: "books" },
    { label: "Door", col: 25, row: 8, cols: 2, rows: 2, kind: "door" },
  ],
  women: [
    { label: "Door", col: 25, row: 6, cols: 2, rows: 2, kind: "door" },
    { label: "Bathroom", col: 25, row: 1, cols: 2, rows: 2, kind: "room" },
  ],
};

/* ---------------------------------------------------------------------------
   MEN — 33 seats
--------------------------------------------------------------------------- */
export const menBlocks = [
  { id: "mizrach", label: "Mizrach — Rabbanim", col: 3, row: 1, cols: 6, rows: 1, seats: 3 },
  { id: "shamash", label: "Shamash row", col: 19, row: 1, cols: 6, rows: 1, seats: 3 },
  { id: "front-e", label: "Front — east", col: 19, row: 5, cols: 4, rows: 1, seats: 2 },
  { id: "table-a", label: "Table A", col: 3, row: 4, cols: 4, rows: 2, seats: 4 },
  { id: "table-b", label: "Table B", col: 8, row: 4, cols: 4, rows: 2, seats: 4 },
  { id: "table-c", label: "Table C", col: 3, row: 7, cols: 6, rows: 2, seats: 6 },
  { id: "table-d", label: "Table D", col: 10, row: 9, cols: 6, rows: 2, seats: 6 },
  { id: "shtender", label: "Wall shtender", col: 1, row: 10, cols: 2, rows: 1, seats: 1 },
  { id: "back", label: "Back bench", col: 17, row: 11, cols: 8, rows: 1, seats: 4 },
];

/* ---------------------------------------------------------------------------
   WOMEN — 22 seats (ezras nashim, behind the mechitza)
--------------------------------------------------------------------------- */
export const womenBlocks = [
  { id: "w-row1", label: "Row 1 — at the mechitza", col: 3, row: 1, cols: 10, rows: 1, seats: 5 },
  { id: "w-row2", label: "Row 2", col: 3, row: 3, cols: 10, rows: 1, seats: 5 },
  { id: "w-row3", label: "Row 3", col: 3, row: 5, cols: 8, rows: 1, seats: 4 },
  { id: "w-row4", label: "Row 4", col: 3, row: 7, cols: 8, rows: 1, seats: 4 },
  { id: "w-side", label: "Side — east", col: 15, row: 3, cols: 4, rows: 2, seats: 4 },
];

/* ---------------------------------------------------------------------------
   Derived — don't edit below this line.
--------------------------------------------------------------------------- */
function expand(blocks, prefix) {
  const seats = [];
  let n = 0;
  for (const block of blocks) {
    const perRow = Math.ceil(block.seats / block.rows);
    for (let i = 0; i < block.seats; i++) {
      n += 1;
      seats.push({
        id: `${prefix}${n}`,
        number: n,
        section: prefix === "M" ? "men" : "women",
        blockId: block.id,
        blockLabel: block.label,
        col: block.col + (i % perRow) * (block.cols / perRow),
        row: block.row + Math.floor(i / perRow),
        w: block.cols / perRow,
      });
    }
  }
  return seats;
}

export const menSeats = expand(menBlocks, "M");
export const womenSeats = expand(womenBlocks, "W");
export const allSeats = [...menSeats, ...womenSeats];
