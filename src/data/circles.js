// The circles abroad for The Love You're Meant to Build (Or HaIsha).
// Each circle gets two pages, built from src/components/CirclePage.astro:
//   /orhaisha/<slug>               the teaser page (preview video, no class)
//   /orhaisha/<slug>/first-class   the same page with Class 1 embedded, sent out after the first class
//
// Anything left null shows on the page as a highlighted blank, so a page
// is never published with a missing name, photo, price or payment link by accident.
// `ready: false` keeps a page out of search engines until its details are in.

export const course = {
  classOneYoutubeId: 'OxV5wRI_ENo',
  schedule: null, // e.g. "Six Sunday evenings, 8:00 pm New York time, starting November 16"
};

export const circles = [
  {
    slug: 'lakewood',
    place: 'Lakewood',
    region: 'New Jersey',
    host: null,      // her name as she wants it on the page, e.g. "Mrs. Chana Levine"
    photo: null,     // file in public/orhaisha/circles/, e.g. "/orhaisha/circles/lakewood.jpg"
    about: null,     // two or three sentences about her, in her own words if possible
    price: null,     // e.g. "$300"
    payLink: null,   // her Stripe payment link, e.g. "https://buy.stripe.com/..."
    ready: false,
  },
  {
    slug: 'staten-island',
    place: 'Staten Island',
    region: 'New York',
    host: null,
    photo: null,
    about: null,
    price: null,
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
    price: null,
    payLink: null,
    ready: false,
  },
];
