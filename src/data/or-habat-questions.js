// ---------------------------------------------------------------
// "Ask anything" — the question box on /orhaisha, and the answers
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
  heading: "Ask anything.",
  intro:
    "No question is too small, too strange, or too personal. Every question a young woman carries into this is a real one, and it deserves a real answer. Ask it here, in your own words, with no name.",
  note: "I answer every question myself, and the answers are posted right here, for everyone, for good. Come back whenever you like: to read what others have asked, and to ask what you have been carrying. If you'd rather be answered privately, leave your WhatsApp number or email in the form.",
  // Tally form "Ask Rav Frenkel" (created 2026-10-25). Form id Gex8Qk.
  formUrl: "https://tally.so/r/Gex8Qk",
  embedUrl:
    "https://tally.so/embed/Gex8Qk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
  answeredHeading: "What young women have asked",
  empty: "The first questions and answers appear here after the first class. Yours can be among them.",
};

// Newest first. See HOW TO ADD AN ANSWER above.
export const answered = [];
