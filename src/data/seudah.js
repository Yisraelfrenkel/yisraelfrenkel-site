/* ---------------------------------------------------------------------------
   ROSH HASHANAH SEUDAH — the one file you edit for the event.

   Everything on /seudah/ comes from here: the wording, the address, the cap.
   Change the cap and the meter, the "seats remaining" line and the point at
   which sign-ups close all follow.
--------------------------------------------------------------------------- */

export const seudah = {
  /* ---- who ---- */
  shulName: "Kehilat Chaverim",
  shulNameHe: "קהילת חברים",
  motto: "חבר אני לכל אשר יראוך",

  /* ---- what ---- */
  title: "Rosh Hashanah First Night Seudah",
  kicker: "Community Seudah",

  /* ---- when and where ---- */
  dayLabel: "Friday night",
  dateLabel: "September 11",
  dateHe: "א׳ תשרי",
  time: "8:00 PM",
  venue: "Kehilat Chaverim",
  address: "14 Eliyahu Salman St, Nachlaot, Jerusalem",
  mapsUrl:
    "https://maps.google.com/?q=14+Eliyahu+Salman+Street,+Nachlaot,+Jerusalem",

  /* ---- the cap ----
     50 places. Nobody can book past it, and sign-ups close on their own the
     moment the last seat goes. */
  capacity: 50,
  maxPerSignup: 10,

  /* ---- the notes on the flyer ---- */
  costLine: "No cost — but sign-up is required",
  sponsorPrefix: "This meal is sponsored by",
  sponsorName: "Natan Shlomo",
  sponsorDedication: "in memory of his grandfather, David Goldstein",
  closingLine:
    "Let's begin the New Year together with joy, achdus and divrei Torah.",
  welcomeLine: "Men and women welcome",

  /* People who bought a seat for davening will assume this is the same seat.
     It isn't — the room is rearranged for the meal and this is only a head
     count. Set to "" to drop the line. */
  notSeatingLine:
    "This is for the meal only. The room is set up differently for the seudah, " +
    "so this has nothing to do with your seat for davening — we're just " +
    "counting how many are coming.",

  /* ---- who to ask ---- */
  contactName: "Daniel Averick",
  contactWhatsapp: "https://wa.me/972547142375",
};
