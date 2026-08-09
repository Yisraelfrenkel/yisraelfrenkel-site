export const site = {
  title: "Yisrael Frenkel",
  description:
    "The Beauty of Human Desire — a free class from Rav Yisrael Frenkel on why good people keep falling, and what their deepest desire is actually reaching for.",
  // The two links that power the whole funnel:
  signupUrl: "https://tally.so/r/7RY1QR",
  personalSessionUrl: "https://tally.so/r/jarqkJ",
  whatsappUrl: "https://chat.whatsapp.com/Ee1YH3IRM06LZ9WB80N73Q",
  // Direct personal contact:
  personalWhatsappUrl: "https://wa.me/972587613153",
  email: "Yisrael@YisraelFrenkel.com",
};

// ---------------------------------------------------------------
// "The Beauty of Human Desire" — the single unified page.
// Content and structure per the approved design handoff
// (design_handoff_beauty_of_human_desire, 2026-08-07). High-fidelity —
// treat copy, section order, and line breaks as final, not indicative.
// ---------------------------------------------------------------

export const bhdHero = {
  wordmark: "/images/yisrael-frenkel-wordmark.png",
  title: "The Beauty of Human Desire",
  subtitle: "Understanding Ourselves Through the Eyes of the Torah",
};

export const openingStory = {
  paragraph:
    "For more than twenty years, people have trusted me with the parts of themselves they believed they could never share with another human being.",
};

export const question = {
  line: "Again and again, I heard the same question.",
  quoteStart: "“If I know this is hurting me…",
  quoteEmphasis: "why can’t I stop wanting it?”",
};

export const invitations = [
  {
    title: "Book a Personal Session",
    description: "A private conversation to explore your unique journey.",
    href: site.personalSessionUrl,
  },
  {
    title: "Join a Chaburah",
    description: "Walk this path together in a small group of committed men.",
    href: site.signupUrl,
  },
];

export const beginningLine =
  "This class is the beginning of seeing that for yourself.";

export const freeClassVideo = {
  id: "jqa55Zmn-yY",
  thumbnail: "https://img.youtube.com/vi/jqa55Zmn-yY/maxresdefault.jpg",
  // Gated: visitors fill out this Tally form first; Tally's own
  // "on submit" redirect (configured in the Tally dashboard, not here)
  // is what sends them to /watch afterward, where the class plays and
  // automatically returns them here when it ends.
  href: "https://tally.so/r/685gZo",
  // Where /watch sends visitors back to once the video ends.
  returnUrl: "/beauty-of-human-desire#continue",
};

export const stepsIntro = [
  "Discovering this truth is only the beginning. The greater challenge is learning to live it.",
  "The journey unfolds through five stages, each building naturally upon the one before it.",
];

export const steps = [
  {
    key: "listen",
    title: "Listen",
    image: "/images/painting-listen.jpg",
    color: "#A4704F",
    paragraphs: [
      [
        "The journey begins by recognizing the many expressions of our deepest desire—",
        "the longing for intimacy, pleasure, connection, to give, to receive, to be valued, to feel safe, to surrender, to protect, to claim, and much more.",
      ],
      "Only when we truly understand what our heart is asking for can we begin discerning which path will actually lead us there.",
    ],
  },
  {
    key: "discern",
    title: "Discern",
    image: "/images/painting-discern.jpg",
    color: "#5F91A8",
    paragraphs: [
      "We are surrounded by many paths that promise to satisfy our deepest desire—pornography, casual sex, marriage, affairs, success, comfort, and countless others.",
      "Every one of them claims it can satisfy what our heart is truly searching for.",
      "Only then can we begin discerning which path our heart truly wants, and how the Torah has been guiding us toward genuine satisfaction all along.",
    ],
  },
  {
    key: "fulfill",
    title: "Fulfill",
    image: "/images/painting-fulfill.jpg",
    color: "#C6A24B",
    paragraphs: [
      "Even after discovering the path our heart truly wants, our deepest needs remain hungry.",
      "A starving person will eat garbage.",
      "The journey continues by learning how to begin nourishing those needs today, long before life becomes perfect, so that the false expressions of our desire gradually become unnecessary.",
    ],
  },
  {
    key: "heal",
    title: "Heal",
    image: "/images/painting-heal.jpg",
    color: "#B98572",
    paragraphs: [
      "Old wounds can convince us that our deepest needs will never truly be met, leaving us desperate to satisfy them as quickly as possible.",
      "The journey continues by learning how to recognize those wounds, understand their influence, and begin the path toward genuine healing.",
    ],
  },
  {
    key: "build",
    title: "Build",
    image: "/images/painting-build.jpg",
    color: "#7D8065",
    paragraphs: [
      "Our deepest desire has been painting the picture of the life we truly long to live all along.",
      "Now we begin building it—one practical step at a time—until our deepest desire becomes the compass that guides every area of our lives.",
    ],
  },
];

// The five steps on a single page, offered as a keepsake after the
// paintings. `filename` is what lands in the visitor's downloads folder —
// it is the name they will see months later, so it stays readable.
export const stepsDownload = {
  note: "The whole path on a single page, to keep.",
  label: "Download the Five Steps",
  image: "/images/path-from-shame-to-fulfillment.jpg",
  filename: "The-Path-from-Shame-to-Fulfillment.jpg",
  alt: "Understanding Humanity Through the Eyes of the Torah — the five steps: Listen, Discern, Fulfill, Heal, Build.",
};

export const tikkunTransition = "This is the Torah’s story of Tikkun HaBris.";
export const tikkunImage = "/images/painting-tikkun-habris.jpeg";

export const livingJourney = {
  heading: "Living the Journey",
  paragraphs: [
    "For the past nine years, I have been guiding men through this journey in small Chaburot, meeting weekly over a five-week course where these ideas become lived experience rather than beautiful concepts.",
    "Each Chaburah is intentionally kept small so that every person is truly known, heard, challenged, and supported as he learns to walk this path together with others.",
    "This journey is called Or HaBris because it teaches us how to establish a true Bris with ourselves, so that we can build a true Bris with our wives, and ultimately with Hashem.",
  ],
};

export const courseCta = {
  label: "Join the Next Chaburah",
};

export const personalSessionCta = {
  label: "Book a Personal Session",
};

export const testimonials = [
  {
    quote:
      "For years, I thought something was wrong with me. Then, in Or HaBris, I finally understood — it hit like aloe on a burn. Rav Frenkel showed me that these feelings weren’t separate from my relationship with Hashem, but connected to it. And underneath all of it, I got in touch with what I actually wanted from my life, apart from anyone else’s expectations.",
    name: "D.C.",
  },
  {
    quote:
      "I’ve always known that Torah has no rules but rather 613 means of connection to the infinite. Or HaBris taught me — and continues teaching me — how to live like a free man.",
    name: "Y.S.",
  },
  {
    quote:
      "It didn’t feel like another mussar schmooze — it reached something deeply emotional and spiritual in me. Between the group meditation, the visualization, and the tools Rav Frenkel brings, the whole experience became something I actually felt, not just heard.",
    name: "Y.J.",
  },
  {
    quote:
      "For the first time, I understood where this need really comes from, and why Hashem planted it in me. Once you see it clearly, your whole relationship to that yearning changes — it becomes one of the most powerful tools you have.",
    name: "Ben S.",
  },
];

export const videoTestimonials = ["rXMn7cNHCHQ", "dXONCJtdxCc"];

export const contact = {
  label: "Have a question?",
  whatsappLabel: "WhatsApp Me",
  emailLabel: "Email Me",
};

export const torahNarrative = [
  "Our story begins with the first man and woman, Adam and Chava hid from one another in shame.",
  "With Avraham, everything changed.",
  "Hashem commanded him to remove the ערלה—the barrier that stood between him and Sarah—so that their relationship could become a complete expression of love, holiness, and יחוד.",
  "Years later, when Avraham sent Eliezer to find a wife for Yitzchak, he told him:",
];

export const torahHebrewQuote = "שים נא ידך תחת ירכי.";
export const torahEnglishIntro = "In other words:";
export const torahEnglishQuote =
  "Take your oath while holding the place where I entered the Bris.";
export const torahPosedQuestion = "Why wasn’t Avraham embarrassed?";

export const torahClosing = [
  "Because he no longer experienced that place through the shame of Adam.",
  "He experienced it as the place through which he entered a Bris with Sarah and with Hashem—the place where יחוד became possible.",
  "The very place that Adam experienced as a source of shame became, for Avraham, the sign of his covenant with Sarah and with Hashem.",
  "This is the journey of Tikkun HaBris: not removing desire, but removing whatever prevents our deepest desires from becoming a source of love, יחוד, and holiness.",
];

// ---------------------------------------------------------------
// "About Yisrael" — the trust page. Reached after someone has already
// met the ideas, not before. Copy is final and approved (2026-08-07):
// treat it as finished prose. Edit wording here, never in the .astro.
//
// Block types, which drive the typography on /about:
//   "intro"       — the opening line, the "entrance" (own styling)
//   "p"           — body paragraph
//   "line"        — a standalone sentence given its own breathing room
//   "credentials" — the yeshivos/kollelim bio, broken into visual lines
//   "photo"       — a photo break ({src, alt}); used mid-page and once
//                   more at the close
//   "quote"       — the enormous centered pull quote
//   "turn"        — the hinge of the whole piece (the two-windows passage)
//   "close"       — the final statement of purpose
// A "divider" (the ✦ visual break) is inserted once in the .astro file
// itself, right after the credentials block — it's decoration, not copy.
// ---------------------------------------------------------------

export const about = {
  eyebrow: "About Yisrael",
  heading: ["Understanding Humanity", "Through the Eyes of the Torah"],
  metaDescription:
    "Rav Yisrael Frenkel on a life spent understanding humanity through the eyes of the Torah — and why Torah and psychology are not two disciplines to be combined, but two windows looking at the same human reality.",
  // Overrides the photography bible's vineyard pick per Yisrael + chat's
  // 2026-08-09 review: the vineyard photo reads as "rabbi in nature,"
  // while this page's thesis is "this is how my mind was formed." The
  // Aron Kodesh portrait — direct eye contact, years of Torah in the
  // background — supports that directly. Shirt/kippah already corrected.
  portraitMain: "/images/opening-story-photo.jpg",
  blocks: [
    {
      type: "intro",
      text: "Since the age of seventeen, I have devoted my life to understanding humanity through the eyes of the Torah—not only what the Torah asks of us, but why; not only what a mitzvah requires, but how it transforms the human being and deepens our relationship with Hashem.",
    },
    {
      type: "p",
      text: "From the very beginning of my Torah learning, I found myself drawn to the inner purpose behind every mitzvah and every area of Torah. I wanted to understand not only what Hashem commands, but how His Torah shapes the human soul, heals the human heart, and enables a person to build a deeper relationship with Him.",
    },
    { type: "line", text: "That question has guided every stage of my life." },
    {
      type: "credentials",
      lead: "Over the years I have:",
      items: [
        "Studied in many of Israel’s leading yeshivos and kollelim",
        "Served on the Beis Din of Rabbi Vind",
        "Helped write and edit Talelei Tohar on hilchos nida, and Talelei Shevi’i on hilchos shabbos",
        "Wrote sections of the Oz VeHadar Shulchan Aruch HaMevoar on hilchos nida",
        "Taught full-time in Yeshiva Gedolah",
        "Served as a Ram in Yeshivas Mir, where I led an international Yiddish Chaburah",
        "Continued teaching in Yeshivat Bat Ayin",
        "And later founded my own yeshiva, where I served as Rosh Yeshiva",
      ],
      closing:
        "Today I have the privilege of serving as the rabbi of Kehilat Chaverim in Jerusalem.",
    },
    {
      type: "p",
      text: "At the same time, my journey never remained confined to the Beis Midrash.",
    },
    {
      type: "p",
      text: "While learning full-time in kollel, I led an Orthodox adaptation of the Call of the Shofar emotional growth workshops and facilitated therapeutic groups for more than two years. While serving as a Ram in yeshiva, I was also working with marriages, sexuality, trauma, addiction, and emotional healing.",
    },
    { type: "line", text: "For me, these were never two separate worlds." },
    { type: "line", text: "They were one continuous journey." },
    {
      type: "p",
      text: "Alongside my years of Torah learning and teaching, I devoted myself to the in-depth study of contemporary approaches to trauma, addiction, emotional healing, and human development, including Internal Family Systems (IFS), coaching methodologies, and other therapeutic models. My goal was never simply to learn techniques, but to understand the deeper principles that make healing possible and to see how those principles illuminate—and are illuminated by—the wisdom of the Torah.",
    },
    {
      type: "p",
      text: "Over the years I have had the privilege of working with individuals and couples facing some of life’s deepest struggles, including marriage and intimacy, sexuality and desire, addiction, sexual trauma, war trauma, emotional trauma, religious trauma, anxiety, depression, and spiritual disconnection.",
    },
    {
      // Placed here, not after "one continuous journey," because this is
      // the hinge from biography into philosophy — the bookshelf becomes
      // symbolic right as the "what fascinates me" reflection begins.
      type: "photo",
      src: "/images/yisrael-study-desk.jpg",
      alt: "Rav Yisrael Frenkel learning at his desk",
    },
    {
      type: "p",
      text: "What has always fascinated me is not simply solving individual problems, but discovering the deeper principles that give rise to them.",
    },
    {
      type: "p",
      text: "In Torah, I have always been drawn to the klalim—the fundamental principles that give meaning to countless seemingly unrelated pratim. The deeper we understand those foundations, the more every individual detail begins to make sense.",
    },
    {
      type: "line",
      text: "I approach the human being in exactly the same way.",
    },
    {
      type: "p",
      text: "Rather than seeing marriage, addiction, trauma, sexuality, anxiety, or faith as isolated problems, I seek to understand the deeper structures that give rise to them. When those foundations become clear, healing often reaches places that remain inaccessible when we focus only on individual symptoms.",
    },
    {
      type: "quote",
      lines: [
        "The Torah taught me",
        "how to understand the human being,",
        "and the human experience",
        "continually deepened",
        "my understanding of the Torah.",
      ],
    },
    {
      type: "line",
      text: "In both, I have always searched for the klalim—the deeper principles that make every prat meaningful.",
    },
    {
      type: "turn",
      lead: "I do not see Torah and psychology as two disciplines that need to be combined.",
      emphasis: "They are two windows looking at the same human reality.",
    },
    {
      type: "p",
      text: "The Torah offers the deepest understanding of what it means to be human, and genuine healing begins when we learn to understand ourselves through that lens.",
    },
    {
      type: "p",
      text: "Whether through private guidance, marriage counseling, Chaburot, teaching, writing, or public lectures, my goal remains the same:",
    },
    {
      type: "close",
      text: "To help people understand themselves through the eyes of the Torah, so they can build a deeper relationship with themselves, with those they love, and ultimately with Hashem.",
    },
    {
      // The page should end on what he's spent his life giving away, not
      // only what he's learned — mid-write at the whiteboard, not posed.
      type: "photo",
      src: "/images/yisrael-teaching-whiteboard.jpg",
      alt: "Rav Yisrael Frenkel teaching at the whiteboard",
    },
  ],
};
