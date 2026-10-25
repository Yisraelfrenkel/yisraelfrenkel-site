// ---------------------------------------------------------------
// "Ask Rav Frenkel" — the question box on /or-habat, and the answers
// that stay on the page.
//
// HOW TO ADD AN ANSWER
// Questions arrive by email from the Tally form (and sit in Tally under
// Submissions). To publish one, copy the block below into `answered`,
// newest first, and deploy. No name is ever shown. If the person asked
// not to be posted, answer them privately and leave it out.
//
//   {
//     date: "2026-11-03",
//     stage: "In shidduchim",            // optional; leave out if not given
//     q: "The question, lightly tidied, in her words.",
//     a: "The answer, in the Rav's words. Line breaks are fine: use \n\n between paragraphs.",
//   },
// ---------------------------------------------------------------

export const ask = {
  heading: "Ask Rav Frenkel",
  intro:
    "Something a class raised. Something you are in the middle of right now. Something nobody ever answered for you. Ask it here, with no name.",
  note: "I read and answer every question myself. The answers that would help other young women stay on this page, for as long as the course exists. If you'd rather be answered privately, leave your WhatsApp number or email in the form.",
  // Tally form "Ask Rav Frenkel" (created 2026-10-25). Form id Gex8Qk.
  formUrl: "https://tally.so/r/Gex8Qk",
  embedUrl:
    "https://tally.so/embed/Gex8Qk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  answeredHeading: "Questions already answered",
  empty: "The first answers will appear here after the first class.",
};

// Newest first. See HOW TO ADD AN ANSWER above.
export const answered = [];
