// ---------------------------------------------------------------
// Homepage ("the root of the tree") and the "under construction"
// pages for branches that are not built yet.
//
// To add a branch: add a topic to a door below. Give it `href` when its
// page exists; leave `href` out and it gets its own /topics/<slug> page
// with the notify-me form automatically.
// To publish a branch later: add its `href` and set `tag` to "Open".
// ---------------------------------------------------------------

export const homeHero = {
  kicker: "Rav · teacher · private practice",
  title: "Torah and psychology,",
  titleEm: "one human being.",
  lead:
    "They are two windows onto the same human reality. I'm Rav Yisrael Frenkel, and for more than twenty years people have trusted me with what they can't say out loud to anyone else. This is where the ideas begin, and where you can begin to learn them with me.",
  photo: "/images/yisrael-blue-jacket.jpg",
  photoAlt: "Rav Yisrael Frenkel smiling, in a dark jacket at a simcha",
  book: "Book a private session",
  explore: "Explore the topics",
  writeFirst: "Prefer to write first?",
  // The three facts under the hero. All true; do not add numbers we cannot stand behind.
  trust: [
    { big: "20+", small: "years in private practice" },
    { big: "Mir and Bat Ayin", small: "Maggid shiur" },
    { big: "Kehilat Chaverim", small: "Rav musmach and Rav of the kehillah, Jerusalem" },
  ],
};

export const homeNav = [
  { label: "Topics", href: "/#topics" },
  { label: "About", href: "/about" },
  { label: "Free class", href: "/beauty-of-human-desire" },
];

export const belief = {
  kicker: "The idea beneath all the ideas",
  title: "Marriage, desire, healing and faith are not separate subjects.",
  titleEm: "They are one human life.",
  text:
    "Torah and psychology are not two disciplines I try to combine. They are two windows looking at the same person—and each helps us see what the other has been showing us all along.",
};

export const topicsIntro = {
  kicker: "Where would you like to begin?",
  title: "One root. Four doors.",
  titleEm: "Eleven paths to explore.",
  text:
    "Start with the place closest to what you are carrying now. The subjects connect; you do not need to understand the whole map before you begin.",
};

// Each door is a group of branches. `tag` on a topic: "Open" / "Free class" = a real
// page exists (needs `href`); "Coming" = under construction.
export const doors = [
  {
    id: "door-1",
    verb: "Prepare",
    name: "Before the chuppah",
    titleStart: "Before the",
    titleEm: "chuppah.",
    lead: "Preparing for a marriage, and for the closeness inside it.",
    image: "/images/yisrael-teaching-whiteboard.jpg",
    imageAlt: "Rav Yisrael Frenkel teaching at a whiteboard",
    ctaLine: "Begin the conversation before the questions become private.",
    topics: [
      {
        slug: "young-women",
        title: "For young women",
        subtitle: "The Love You're Meant to Build · אור הבת",
        text: "Six classes on building a marriage before you are in one. The first class is free.",
        href: "/or-habat",
        tag: "Open",
      },
      {
        slug: "young-men",
        title: "For young men",
        text: "What no one told you before you stand under the chuppah. Honest and practical, without shame.",
        tag: "Coming",
      },
      {
        slug: "marriage-course",
        title: "Marriage, Understood",
        text: "A course for couples who want to understand each other, not only manage each other.",
        tag: "Coming",
      },
      {
        slug: "or-hazivug",
        title: "Or HaZivug",
        subtitle: "An intimacy workshop for couples",
        text: "Desire, closeness and physical intimacy, spoken about plainly and with reverence.",
        tag: "Coming",
      },
    ],
  },
  {
    id: "door-2",
    verb: "Understand",
    name: "Desire and purpose",
    titleStart: "Desire and",
    titleEm: "purpose.",
    lead: "What we long for, and what we were sent here to do.",
    image: "/images/yisrael-teaching-conversation.jpg",
    imageAlt: "Rav Yisrael Frenkel teaching in conversation",
    tone: "apricot",
    reverse: true,
    ctaLine: "Desire is not the enemy. It is trying to tell us something.",
    topics: [
      {
        slug: "beauty-of-human-desire",
        title: "The Beauty of Human Desire",
        text: "A free class on why good people keep falling, and what their deepest desire is actually reaching for.",
        href: "/beauty-of-human-desire",
        tag: "Free class",
      },
      {
        slug: "ayeka",
        title: "Ayeka",
        subtitle: "Where are you?",
        text: "Finding your own unique purpose in the world.",
        tag: "Coming",
      },
    ],
  },
  {
    id: "door-3",
    verb: "Meet gently",
    name: "Healing",
    titleStart: "Healing.",
    titleEm: "",
    lead: "For what has been carried alone, sometimes for years.",
    image: "/images/chaburah-in-person.jpg",
    imageAlt: "Rav Yisrael Frenkel teaching an in-person Chaburah",
    ctaLine: "You do not have to arrive with the words.",
    topics: [
      {
        slug: "addiction",
        title: "Addiction",
        text: "Why strong people cannot simply stop, and a way back that does not run through self-hatred.",
        tag: "Coming",
      },
      {
        slug: "trauma",
        title: "Trauma and religious trauma",
        text: "When the place that was meant to be home is where it hurt.",
        tag: "Coming",
      },
      {
        slug: "abuse-in-the-community",
        title: "Sexual abuse in the Orthodox community",
        text: "Speaking honestly about what has been kept silent, and how survivors and families begin to heal.",
        tag: "Coming",
      },
      {
        slug: "healing-emunah",
        title: "Healing emunah",
        text: "A healthy and safe God consciousness: faith without fear.",
        tag: "Coming",
      },
    ],
  },
  {
    id: "door-4",
    verb: "Return to",
    name: "Torah itself",
    titleStart: "Torah",
    titleEm: "itself.",
    lead: "The source all of it grows from.",
    image: "/images/yisrael-study-desk.jpg",
    imageAlt: "Rav Yisrael Frenkel studying at his desk",
    tone: "plum",
    reverse: true,
    topics: [
      {
        slug: "torah-and-geula",
        title: "Torah and the road to Geula",
        text: "How Torah unfolds through the generations, and where it is leading us.",
        tag: "Coming",
      },
    ],
  },
];

// The pull-quote after door two uses testimonials[0] from content.js, shortened to its
// first sentence; the "voices" section uses testimonials[1] in full.
export const pullQuote = {
  before: "For years, I thought something was wrong with me. Then, in Or HaBris, I finally understood — ",
  em: "it hit like aloe on a burn.",
  name: "D.C.",
};

export const voices = {
  kicker: "In their own words",
  title: "Ideas that become",
  titleEm: "a way of living.",
};

export const homeClose = {
  title: "Not sure where",
  title2: "to begin?",
  lead: "Tell me what you're carrying, and we'll find the right place to start together.",
  book: "Book a private session",
};

export const footerLine = "Torah teaching and private guidance from Jerusalem.";

// Everything shown on a /topics/<slug> "under construction" page.
export const construction = {
  banner: "This website is under construction",
  allTopics: "All topics",
  formKicker: "Leave a note",
  formTitle: "Fill out your name for a private session on these topics",
  lead: "This topic is still being written. Leave your name and I'll send it to you the moment it's ready.",
  nameLabel: "Your name",
  namePlaceholder: "First name is fine",
  choiceLegend: "What would you like?",
  choiceNotify: "I'm interested in this topic. Send it to me when it's completed.",
  choiceSession: "I'd like a private session on this topic.",
  submit: "Send on WhatsApp",
  submitEmail: "Send by email instead",
  note: "This opens WhatsApp or your email with the message already written. Nothing is sent until you press send there.",
  sessionLink: "Or book a private session right now",
  noWhatsApp: "No WhatsApp?",
  emailLink: "Email reaches me just as well.",
  back: "Back to all the topics",
};

// Flat list of topics that need an under-construction page.
export const constructionTopics = doors.flatMap((door) =>
  door.topics.filter((t) => !t.href).map((t) => ({ ...t, door: door.name }))
);
