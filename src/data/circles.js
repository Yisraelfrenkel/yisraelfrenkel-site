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
    host: null,      // her name as she wants it on the page, e.g. "Mrs. Chana Levine"
    photo: null,     // file in public/orhaisha/circles/, e.g. "/orhaisha/circles/lakewood.jpg"
    about: null,     // two or three sentences about her, in her own words if possible
    signupLink: null, // where she reserves a place at the free first class (a form), e.g. "https://tally.so/r/..."
    payLink: null,   // her Stripe payment link for Classes 2–6, e.g. "https://buy.stripe.com/..."
    ready: false,
  },
  {
    slug: 'staten-island',
    place: 'Staten Island',
    region: 'New York',
    host: null,
    photo: null,
    about: null,
    signupLink: null,
    payLink: null,
    ready: false,
  },
  {
    slug: 'long-island',
    place: 'Long Island',
    region: 'New York',
    host: null,
    photo: null,
    about: null,
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
    host: null,      // not named on the page: "one of our trained coaches"
    photo: null,
    about: null,
    signupLink: null,
    payLink: null,   // the Rav's own payment link for women joining on Zoom
    ready: false,
  },
];
