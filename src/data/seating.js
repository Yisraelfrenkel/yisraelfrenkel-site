/* ---------------------------------------------------------------------------
   SEATING CHART — the one file you edit.

   The room is drawn on a single grid, laid out the way your sketch is: the
   mechitza runs vertically down the right-hand side, men to the left of it,
   women to the right.

   HOW A BLOCK WORKS
   Every table, bench and single chair is one line below.

     col / row    where its top-left corner sits (1 = far left / very top)
     cols / rows  how many grid cells wide and tall it is
     seats        how many seats are in it

   Seats fill the block left→right, then top→bottom — same as the numbers in
   your sketch. Everything else on the site (the picture, the numbering, the
   sign-up list, the database) is generated from this file.

   SEAT NUMBERING
   Blocks are numbered in the order they appear in the array: men 1..N, women
   1..N, each starting at 1. The order below runs top-to-bottom, left-to-right,
   so a number is easy to find while standing in the room.

   >>> Once you've sent the link out, DON'T reorder or resize blocks. <<<
   The numbers would shift under people who already signed up. Before you
   publish, change whatever you like.
--------------------------------------------------------------------------- */

export const config = {
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

  contactName: "REPLACE — gabbai name",
  contactWhatsapp: "https://wa.me/972000000000",
};

/* The grid the whole room is drawn on. */
export const grid = { cols: 42, rows: 22 };

/* ---------------------------------------------------------------------------
   FIXTURES — everything that isn't a seat. Purely for orientation; move them
   around freely, they carry no numbers.
--------------------------------------------------------------------------- */
export const fixtures = [
  { label: "Chamber", col: 18, row: 1, cols: 4, rows: 2, kind: "room" },
  { label: "Door", col: 26, row: 1, cols: 5, rows: 1, kind: "door-h" },
  { label: "Bathroom", col: 37, row: 1, cols: 4, rows: 2, kind: "room" },
  { label: "Wall · Siddurim", col: 24, row: 3, cols: 11, rows: 2, kind: "shelf" },
  { label: "Door", col: 41, row: 5, cols: 2, rows: 3, kind: "door-v" },
  { label: "Wall", col: 2, row: 7, cols: 5, rows: 3, kind: "shelf" },
  { label: "Bima", col: 14, row: 6, cols: 6, rows: 4, kind: "bima" },
  { label: "Mechitza", col: 30, row: 11, cols: 1, rows: 11, kind: "mechitza" },
  { label: "Seforim", col: 2, row: 21, cols: 26, rows: 1, kind: "books" },
];

/* ---------------------------------------------------------------------------
   SEATS. `section` decides which side of the mechitza a block belongs to and
   which numbering run it joins.
--------------------------------------------------------------------------- */
export const blocks = [
  /* ---- MEN — left of the mechitza ---- */
  { id: "m-top", section: "men", label: "Top wall row", col: 4, row: 3, cols: 8, rows: 1, seats: 4 },
  { id: "m-siddur", section: "men", label: "By the siddurim", col: 23, row: 4, cols: 2, rows: 1, seats: 1 },
  { id: "m-wall", section: "men", label: "Wall bench", col: 2, row: 10, cols: 4, rows: 1, seats: 2 },
  { id: "m-middle", section: "men", label: "Middle row", col: 8, row: 8, cols: 4, rows: 1, seats: 2 },
  { id: "m-mech-a", section: "men", label: "At the mechitza", col: 28, row: 6, cols: 2, rows: 2, seats: 2 },
  { id: "m-bima", section: "men", label: "At the bima", col: 20, row: 10, cols: 2, rows: 1, seats: 1 },
  { id: "m-half", section: "men", label: "Shtenders", col: 3, row: 15, cols: 2, rows: 2, seats: 2 },
  { id: "m-t1", section: "men", label: "Table 1 (5′)", col: 7, row: 15, cols: 4, rows: 2, seats: 4 },
  { id: "m-t2", section: "men", label: "Table 2 (5′)", col: 14, row: 15, cols: 4, rows: 2, seats: 4 },
  { id: "m-t3", section: "men", label: "Table 3 (5′)", col: 21, row: 15, cols: 4, rows: 2, seats: 4 },
  { id: "m-mech-b", section: "men", label: "At the mechitza", col: 28, row: 20, cols: 2, rows: 1, seats: 1 },

  /* ---- WOMEN — right of the mechitza ---- */
  { id: "w-t1", section: "women", label: "Table 1 (5′)", col: 31, row: 6, cols: 4, rows: 2, seats: 4 },
  { id: "w-t2", section: "women", label: "Table 2", col: 38, row: 6, cols: 4, rows: 2, seats: 4 },
  { id: "w-single-a", section: "women", label: "Single chair", col: 36, row: 12, cols: 2, rows: 1, seats: 1 },
  { id: "w-t3", section: "women", label: "Table 3 (5′)", col: 31, row: 15, cols: 4, rows: 2, seats: 4 },
  { id: "w-t4", section: "women", label: "Table 4 (5½′)", col: 38, row: 16, cols: 4, rows: 2, seats: 4 },
  { id: "w-single-b", section: "women", label: "Single chair", col: 36, row: 20, cols: 2, rows: 1, seats: 1 },
];

/* ---------------------------------------------------------------------------
   Derived — don't edit below this line.
--------------------------------------------------------------------------- */
function expand(section, prefix) {
  const seats = [];
  let n = 0;
  for (const block of blocks.filter((b) => b.section === section)) {
    const perRow = Math.ceil(block.seats / block.rows);
    for (let i = 0; i < block.seats; i++) {
      n += 1;
      seats.push({
        id: `${prefix}${n}`,
        number: n,
        section,
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

export const menSeats = expand("men", "M");
export const womenSeats = expand("women", "W");
export const allSeats = [...menSeats, ...womenSeats];
