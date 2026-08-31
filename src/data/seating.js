/* ---------------------------------------------------------------------------
   SEATING CHART — the one file you edit.

   The room is one grid, laid out like your sketch: the mechitza runs
   vertically, men to the left of it, women to the right.

   HOW A BLOCK WORKS
   Every table, bench and single chair is one line, and it carries its own
   seat numbers exactly as you wrote them:

     { id: "m-16-19", section: "men", label: "Table", col: 19, row: 13,
       numbers: [[16, 17], [18, 19]] }

     numbers   the seats, drawn row by row, left to right — the picture of the
               table. `null` leaves a gap where a chair was pulled out.
     col/row   where the block's top-left corner sits (1 = far left / very top)
     w         how many grid columns wide each seat is (default 2). Bigger =
               a wider chair on the plan; it changes nothing else.

   The numbers here ARE the seat numbers people book. Renumbering a seat here
   renames it everywhere — the picture, the sign-up list and the database key.
   So before you publish, set them however you like; after the link goes out,
   leave them alone or people's seats will move under them.

   Every number must be unique within its section. If you duplicate one or skip
   one, the build stops and tells you which — it won't quietly ship a broken
   chart.
--------------------------------------------------------------------------- */

export const config = {
  shulName: "Beis Medrash",
  season: "Yamim Noraim 5787",

  // What a seat costs. `two` is the price of a pair — one payment covering two
  // seats, so one confirmation number is allowed to claim two.
  pricing: { currency: "₪", one: 200, two: 300 },

  // The Cardcom payment links. People are sent here first; the sign-up link is
  // what they receive after paying. If your Cardcom page lets the payer choose
  // the amount, put the same link in both.
  paymentUrl: "https://secure.cardcom.solutions/REPLACE_WITH_YOUR_LINK",
  paymentUrlTwo: "https://secure.cardcom.solutions/REPLACE_WITH_YOUR_LINK",

  // The private sign-up page. Anyone with this link can take a seat, so it
  // belongs only on the Cardcom receipt / thank-you page — never in WhatsApp.
  // Change this string any time to invalidate the old link.
  claimPath: "/seats/claim-5787-kesser",

  contactName: "REPLACE — gabbai name",
  contactWhatsapp: "https://wa.me/972000000000",

  // Callouts shown above the chart, colour-matched to their section. Set a
  // section to "" (or delete the line) to drop its note.
  sectionNotes: {
    men: "",
    women:
      "The tables will all be taken out to make room for more seats, so there " +
      "will be more places than the chart shows.",
  },
};

/* Price wording, so it reads the same everywhere it appears. */
const { currency: cur, one, two } = config.pricing;
export const priceOne = `One seat — ${cur}${one}`;
export const priceTwo = `Two seats — ${cur}${two}`;
export const priceSummary = `${cur}${one} a seat · ${cur}${two} for two`;

/* The grid the whole room is drawn on. */
export const grid = { cols: 48, rows: 12 };

/* ---------------------------------------------------------------------------
   FIXTURES — everything that isn't a seat. Move them freely; they carry no
   numbers and nobody books them.
--------------------------------------------------------------------------- */
export const fixtures = [
  { label: "Chazan", col: 23, row: 1, cols: 3, rows: 1, kind: "room" },
  { label: "Door", col: 28, row: 1, cols: 6, rows: 1, kind: "door-h" },
  { label: "Bathroom", col: 41, row: 1, cols: 4, rows: 1, kind: "room" },
  { label: "Wall · Siddurim", col: 29, row: 2, cols: 10, rows: 2, kind: "shelf" },
  { label: "Door", col: 47, row: 3, cols: 2, rows: 2, kind: "door-v" },
  { label: "Bima", col: 19, row: 3, cols: 7, rows: 4, kind: "bima" },
  { label: "Seforim", col: 1, row: 4, cols: 4, rows: 3, kind: "books" },
  { label: "Wall", col: 5, row: 4, cols: 7, rows: 3, kind: "shelf" },
  // The two side walls. A "wall-v" draws a solid line down the RIGHT edge of
  // its column, so put it in the column immediately left of what it encloses.
  { label: "Wall", col: 5, row: 1, cols: 1, rows: 3, kind: "wall-v" },
  { label: "Wall", col: 4, row: 9, cols: 1, rows: 4, kind: "wall-v" },
  { label: "Bathroom", col: 1, row: 9, cols: 3, rows: 3, kind: "room" },
  { label: "Mechitza", col: 34, row: 2, cols: 1, rows: 11, kind: "mechitza" },
];

/* ---------------------------------------------------------------------------
   SEATS — men 1–34, women 1–21, numbered as in the sketch.
--------------------------------------------------------------------------- */
export const blocks = [
  /* ---- MEN — left of the mechitza ---- */
  { id: "m-front", section: "men", label: "Front bench", col: 6, row: 1, numbers: [[1, 2, 3, 4, 5]] },
  { id: "m-6", section: "men", label: "By the bima", col: 27, row: 3, numbers: [[6]] },
  { id: "m-7", section: "men", label: "By the bima", col: 26, row: 6, numbers: [[7]] },
  { id: "m-8-9", section: "men", label: "At the mechitza", col: 31, row: 5, w: 3, numbers: [[8], [9]] },
  { id: "m-10", section: "men", label: "At the mechitza", col: 32, row: 11, numbers: [[10]] },
  { id: "m-33-34", section: "men", label: "Along the wall", col: 12, row: 5, w: 3, numbers: [[33, 34]] },
  { id: "m-28-29", section: "men", label: "By the seforim", col: 1, row: 7, numbers: [[28, 29]] },
  { id: "m-30-31", section: "men", label: "Under the wall", col: 5, row: 7, numbers: [[30, 31]] },
  { id: "m-32", section: "men", label: "Under the wall", col: 9, row: 8, numbers: [[32]] },
  { id: "m-20", section: "men", label: "Single chair", col: 17, row: 8, numbers: [[20]] },
  { id: "m-15", section: "men", label: "Single chair", col: 23, row: 8, numbers: [[15]] },
  { id: "m-27", section: "men", label: "Single chair", col: 5, row: 9, numbers: [[27]] },
  { id: "m-25-26", section: "men", label: "Back table", col: 7, row: 10, numbers: [[25, 26]] },
  { id: "m-21-24", section: "men", label: "Table", col: 12, row: 9, w: 3, numbers: [[21, 22], [23, 24]] },
  { id: "m-16-19", section: "men", label: "Table", col: 19, row: 9, w: 3, numbers: [[16, 17], [18, 19]] },
  { id: "m-11-14", section: "men", label: "Table", col: 25, row: 9, w: 3, numbers: [[11, 12], [13, 14]] },

  /* ---- WOMEN — right of the mechitza ---- */
  { id: "w-1-4", section: "women", label: "Table", col: 35, row: 5, numbers: [[1, 2], [3, 4]] },
  { id: "w-5", section: "women", label: "Single chair", col: 39, row: 5, numbers: [[5]] },
  // Chair 6 and the table beyond it sit across the aisle. The gap runs down
  // columns 41-42, lining up with the one between 16 and 17 in the row below.
  { id: "w-6", section: "women", label: "Single chair", col: 43, row: 5, numbers: [[6]] },
  { id: "w-7-10", section: "women", label: "Table", col: 45, row: 5, numbers: [[7, 8], [9, 10]] },
  { id: "w-12-15", section: "women", label: "Table", col: 35, row: 9, numbers: [[12, 13], [14, 15]] },
  { id: "w-16", section: "women", label: "Single chair", col: 39, row: 9, numbers: [[16]] },
  { id: "w-11", section: "women", label: "Single chair", col: 41, row: 11, numbers: [[11]] },
  { id: "w-17", section: "women", label: "Single chair", col: 43, row: 9, numbers: [[17]] },
  { id: "w-18-21", section: "women", label: "Table", col: 45, row: 9, numbers: [[18, 19], [20, 21]] },
];

/* ---------------------------------------------------------------------------
   Derived — don't edit below this line.
--------------------------------------------------------------------------- */
const DEFAULT_W = 2;

/* Each block's footprint on the grid, so the plan can draw the table it sits on. */
export const placedBlocks = blocks.map((b) => {
  const w = b.w ?? DEFAULT_W;
  return {
    ...b,
    w,
    cols: Math.max(...b.numbers.map((r) => r.length)) * w,
    rows: b.numbers.length,
  };
});

function expand(section, prefix) {
  const seats = [];
  for (const block of placedBlocks.filter((b) => b.section === section)) {
    block.numbers.forEach((line, r) => {
      line.forEach((number, c) => {
        if (number == null) return;
        seats.push({
          id: `${prefix}${number}`,
          number,
          section,
          blockId: block.id,
          blockLabel: block.label,
          col: block.col + c * block.w,
          row: block.row + r,
          w: block.w,
        });
      });
    });
  }
  return seats.sort((a, b) => a.number - b.number);
}

/* A duplicated or missing number would hand two people the same seat, or hide
   one nobody can book. Fail the build rather than ship either. */
function audit(seats, section) {
  const seen = new Set();
  for (const s of seats) {
    if (seen.has(s.number)) {
      throw new Error(`seating.js: ${section} seat ${s.number} is listed twice`);
    }
    seen.add(s.number);
  }
  const missing = [];
  for (let n = 1; n <= seats.length; n++) {
    if (!seen.has(n)) missing.push(n);
  }
  if (missing.length) {
    throw new Error(
      `seating.js: ${section} numbering has gaps — ${missing.join(", ")} missing ` +
        `from a run of ${seats.length} seats`
    );
  }
  return seats;
}

export const menSeats = audit(expand("men", "M"), "men");
export const womenSeats = audit(expand("women", "W"), "women");
export const allSeats = [...menSeats, ...womenSeats];
