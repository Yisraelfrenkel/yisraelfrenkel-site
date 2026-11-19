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
  schedule: null, // e.g. "Six Sunday evenings, 8:00 pm New York time, starting November 16"
  // From the business plan (draft 4): Class 1 free, Classes 2–6 one price, early bird the night of Class 1.
  priceEarly: '$300',
  priceLate: '$350',
};

export const circles = [
  {
    slug: 'lakewood',
    place: 'Lakewood',
    region: 'New Jersey',
    host: 'Rivki Genuth', // her name as she wants it on the page
    photo: null,     // file in public/orhaisha/circles/, e.g. "/orhaisha/circles/lakewood.jpg"
    about: "Rivki Genuth is a trained marriage and intimacy coach. With four years of training in the mental health field and two years coaching couples, she brings the wisdom of a woman and a mother of grown children into her work. After years of discovering her purpose as a Jewish woman, she now shares what she has learned, so that no young woman, no veteran married woman, and no couple should have to struggle with questions our beautiful Torah has always spoken about and answered.", // approved by her 2026-11-19 (our suggested rewrite)
    signupLink: null, // where she reserves a place at the free first class (a form), e.g. "https://tally.so/r/..."
    payLink: null,   // her Stripe payment link for Classes 2–6, e.g. "https://buy.stripe.com/..."
    ready: false,
  },
  {
    slug: 'staten-island',
    place: 'Staten Island',
    region: 'New York',
    host: 'Sivan Winkler',
    photo: null,
    about: [ // approved by her 2026-11-20 (our suggested rewrite; one string per paragraph)
      "Sivan Winkler is a life coach and devoted mother of four, with a passion for helping women reconnect with themselves, recognize their worth, and find their own voice. Her own journey of healing and personal growth inspired her to help others discover their inner strength and embrace who they truly are.",
      "Her approach is warm, compassionate and intuitive, and women feel seen, heard and understood with her. She believes that a deeper connection with ourselves, the Torah and Hashem is the foundation for confidence, self-trust and healthy, meaningful relationships. She hosts the Staten Island circle so that young women can bring that foundation with them into dating and marriage.",
    ],
    signupLink: null,
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
    photo: '/orhaisha/circles/zoom.jpg', // sent 2026-11-19
    about: null,
    signupLink: null,
    payLink: null,   // the Rav's own payment link for women joining on Zoom
    ready: false,
  },
];

// Testimonials shown on every circle page ("In their words."), newest approved first.
// They come from the testimonial page (yisraelfrenkel.com/orhaisha/testimonial), saved in the
// Google Sheet "Testimonials - The Love You're Meant to Build". Only add one whose
// "OK to quote her words" column says Yes. `name` is what she asked to be shown.
export const testimonials = [
  {
    name: 'Gabby',
    from: 'Yerushalayim cohort',
    text: [
      'I walked into Rav Yisrael’s course with major skepticism about dating and marriage because of poor past experiences, yet with an open mind, because I had nothing to lose and everything to gain. Through his teachings and our timeless Torah wisdom, Rav Yisrael gave me the knowledge I need to date purposefully and build a healthy, loving, real marriage in the future.',
      'To say I highly recommend this course would be an understatement. I think it should be a prerequisite to dating. Rav Yisrael is thorough and genuine. No black-and-white shenanigans, only real truth!',
    ],
  },
  {
    name: 'Eli D.',
    from: 'Yerushalayim cohort',
    text: [
      'If you want a deep, intimate connection, with yourself and in your marriage, Rav Frenkel’s course helps you uncover your values and gives you practical tools to build a marriage where you both flourish.',
    ],
  },
  {
    name: 'Yael',
    from: 'Yerushalayim cohort',
    text: [
      'This course has given me so much insight into the roles of a man and a woman in marriage, what I deserve in a marriage, and what marriage truly represents from a Torah perspective. It has brought me so much clarity when it comes to dating and understanding what to look for in a future husband, but also what a healthy, fulfilling marriage should look like.',
      'Learning about marriage through the lens of Torah has especially opened my eyes to the beauty and wisdom behind the laws of marriage. Rather than seeing them as restrictions that take away from pleasure, I now understand how they are designed to deepen intimacy, enhance pleasure, and protect the value, dignity, and uniqueness of a woman.',
      'I feel that I walk away from this course with not only more knowledge but also a completely different perspective on marriage and a much clearer understanding of what I am looking for.',
    ],
  },
];
