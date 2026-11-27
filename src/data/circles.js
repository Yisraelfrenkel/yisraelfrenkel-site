// The circles abroad for The Love You're Meant to Build (Or HaIsha).
// Each circle gets two pages, built from src/components/CirclePage.astro:
//   /orhaisha/<slug>               the teaser page (preview video, no class)
//   /orhaisha/<slug>/first-class   the same page with the first class embedded, sent out after it
//
// Anything left null shows on the page as a highlighted blank, so a page
// is never published with a missing name, photo, price or payment link by accident.
// `ready: false` keeps a page out of search engines until its details are in.

export const course = {
  // The recording of this cohort's own first class (YouTube id), shown on the first-class pages.
  // Until it exists those pages show a blank where the video goes.
  firstClassYoutubeId: null,
  schedule: "Six Monday evenings at 7:00 pm Eastern (New York time): December 14, 21 and 28, January 4, 11 and 18", // decided 2026-11-23
  // The six dates as short chips, and the evening's clock (Eastern), shown in "How a class works".
  dates: ['Dec 14', 'Dec 21', 'Dec 28', 'Jan 4', 'Jan 11', 'Jan 18'],
  when: 'Mondays · 7:00 pm Eastern (New York time)',
  clock: ['7:00', '8:00', '8:15', '8:45 pm'],
  // From the business plan (draft 4): Class 1 free, Classes 2–6 one price, early bird within 24 hours of Class 1.
  priceEarly: '$300',
  priceLate: '$350',
};

export const circles = [
  {
    slug: 'toms-river', // was 'lakewood' until 2026-11-23 (the home is in Toms River, next to Lakewood); old links redirect
    place: 'Toms River',
    region: 'New Jersey',
    host: 'Rivki Genuth', // her name as she wants it on the page
    whatsapp: '17326167771', // her WhatsApp for questions and discount requests (she agreed, 2026-11-24)
    photo: '/orhaisha/circles/toms-river.jpg', // sent 2026-11-20
    about: "Rivki Genuth is a trained marriage and intimacy coach. With four years of training in the mental health field and two years coaching couples, she brings the wisdom of a woman and a mother of grown children into her work. After years of discovering her purpose as a Jewish woman, she now shares what she has learned, so that no young woman, no veteran married woman, and no couple should have to struggle with questions our beautiful Torah has always spoken about and answered.", // approved by her 2026-11-19 (our suggested rewrite)
    signupLink: 'https://tally.so/r/rDOxZ5', // where she reserves a place at the free first class (a form), e.g. "https://tally.so/r/..."
    payLink: null,   // her Stripe payment link for Classes 2–6, e.g. "https://buy.stripe.com/..."
    ready: false,
  },
  {
    slug: 'staten-island',
    place: 'Staten Island',
    region: 'New York',
    host: 'Sivan Winkler',
    whatsapp: '16467317032', // her WhatsApp for questions and discount requests (she agreed, 2026-11-24)
    photo: '/orhaisha/circles/staten-island-2.jpg', // the one Sivan chose, 2026-11-22
    about: [ // approved by her 2026-11-20 (our suggested rewrite; one string per paragraph)
      "Sivan Winkler is a life coach and devoted mother of four, with a passion for helping women reconnect with themselves, recognize their worth, and find their own voice. Her own journey of healing and personal growth inspired her to help others discover their inner strength and embrace who they truly are.",
      "Her approach is warm, compassionate and intuitive, and women feel seen, heard and understood with her. She believes that a deeper connection with ourselves, the Torah and Hashem is the foundation for confidence, self-trust and healthy, meaningful relationships.",
    ],
    signupLink: 'https://tally.so/r/Gep2ZQ',
    payLink: null,
    ready: false,
  },
  {
    // The whole course on Zoom, from anywhere. Also the central page that lists every circle:
    // yisraelfrenkel.com/orhaisha/zoom
    slug: 'zoom',
    place: 'Zoom',
    region: 'from anywhere',
    online: true,
    host: 'Sharona Noy', // holds the Zoom breakout room for everyone joining from home
    whatsapp: '972526253500', // her WhatsApp for questions and discount requests (she agreed, 2026-11-24)
    photo: '/orhaisha/circles/zoom.jpg', // sent 2026-11-19
    about: "Sharona Noy is a marriage and intimacy coach, trained through the Torah Psychology School of Counseling and Coaching, an affiliate of the International Coaching Federation (ICF). She is also trained in Emotion Aid, an approach to emotional resilience, and believes deeply in the connection between mind and body. Her work is helping women and couples build meaningful, healthy and fulfilling relationships.", // approved by her 2026-11-20; its last sentence (about the circle) dropped 2026-11-21 at the Rav's request: the circle paragraph under the bio says it
    signupLink: 'https://tally.so/r/q5G2y8',
    payLink: null,   // the Rav's own payment link for women joining on Zoom
    ready: false,
  },
];

// Testimonials shown on every circle page ("In their words."), Malka first, then by strength of the message (the Rav, 2026-11-26).
// They come from the testimonial page (yisraelfrenkel.com/orhaisha/testimonial), saved in the
// Google Sheet "Testimonials - The Love You're Meant to Build". Only add one whose
// "OK to quote her words" column says Yes. `name` is what she asked to be shown.
export const testimonials = [
  {
    name: 'Malka Bergstein',
    text: [
      'Rabbi Frenkel is an exceptionally gifted and engaging lecturer with a profound understanding of the human soul and the complexities of relationships.',
      'What makes his classes so unique is his ability to bridge tremendous depth with practical, everyday application. He courageously addresses existential questions, emotional realities, and relational struggles that are often left unspoken, approaching them with remarkable sensitivity, wisdom, and authenticity.',
      'His interactive teaching style creates a space for genuine exploration, deeper self-awareness, and meaningful growth.',
      'I would highly recommend these classes to anyone: young women just starting to explore relationships, women preparing for marriage, newly married women, and those who have been married for decades. Wherever one stands in her journey, there is so much to discover, understand, and deepen.',
      'These classes are rooted in deep, authentic Torah, and offer not only a greater understanding of marriage, but a deeper understanding of ourselves and our capacity for meaningful connection.',
    ],
  },
  {
    name: 'Chanie R.', // sent 2026-11-27 through the form; her words, typo and one preposition fixed
    text: [
      'Rav Frenkel’s course gives women a deeper understanding of their needs, what they deserve, the dynamics of marriage, and the qualities that truly matter in a husband. Grounded in Torah wisdom, it offers a refreshing perspective on what a healthy, intimate, and fulfilling marriage should look like. It brings a sense of clarity and purpose to dating that I believe every woman would benefit from before choosing a life partner.',
      'I strongly believe that every seminary should implement this course in their curriculum. That’s how good and important it is!',
    ],
  },
  {
    name: 'Gabby',
    text: [
      'I walked into Rav Yisrael’s course with major skepticism about dating and marriage because of poor past experiences, yet with an open mind, because I had nothing to lose and everything to gain. Through his teachings and our timeless Torah wisdom, Rav Yisrael gave me the knowledge I need to date purposefully and build a healthy, loving, real marriage in the future.',
      'To say I highly recommend this course would be an understatement. I think it should be a prerequisite to dating. Rav Yisrael is thorough and genuine. No black-and-white shenanigans, only real truth!',
    ],
  },
  {
    name: 'Yael',
    text: [
      'This course has given me so much insight into the roles of a man and a woman in marriage, what I deserve in a marriage, and what marriage truly represents from a Torah perspective. It has brought me so much clarity when it comes to dating and understanding what to look for in a future husband, but also what a healthy, fulfilling marriage should look like.',
      'Learning about marriage through the lens of Torah has especially opened my eyes to the beauty and wisdom behind the laws of marriage. Rather than seeing them as restrictions that take away from pleasure, I now understand how they are designed to deepen intimacy, enhance pleasure, and protect the value, dignity, and uniqueness of a woman.',
      'I feel that I walk away from this course with not only more knowledge but also a completely different perspective on marriage and a much clearer understanding of what I am looking for.',
    ],
  },
  {
    name: 'Miriam', // sent by email 2026-11-26 (not through the form); her words exactly, punctuation only
    text: [
      'I really enjoyed the course and learned so much from it. Each class gave me deep insight on how to maintain a healthy relationship, not only with myself but with my future husband, from a Torah-based perspective, in order to have a happy, long-lasting marriage, which is the foundation to building a family. This course is very essential, and I feel like more people should take it, because it really helps you understand what’s truly important.',
      'Thank you, Rabbi Yisrael Frenkel, for this wonderful, transformative opportunity.',
    ],
  },
  {
    name: 'Eli D.',
    text: [
      'If you want a deep, intimate connection, with yourself and in your marriage, Rav Frenkel’s course helps you uncover your values and gives you practical tools to build a marriage where you both flourish.',
    ],
  },
];
