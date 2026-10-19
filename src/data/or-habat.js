// ---------------------------------------------------------------
// "The Love You're Meant to Build" — the young women's pre-dating course.
// Working name: Or HaBat (אור הבת). All copy for /or-habat lives here;
// the page file only lays it out. Source of truth for the class list is
// the vault note "Girls Marriage Course / Syllabus - draft 3".
// ---------------------------------------------------------------

import { site } from "./content.js";

const whatsapp = (text) =>
  `https://wa.me/972587613153?text=${encodeURIComponent(text)}`;

export const ohb = {
  slug: "/or-habat",
  wordmark: "/images/yisrael-frenkel-wordmark.png",
  eyebrow: "A six-class Torah course for young women, before and during shidduchim",
  title: "The Love You're Meant to Build",
  subtitle: "It begins long before you start dating.",
  hebrewName: "אור הבת",
  hebrewGloss: "Or HaBat · a daughter's light",

  // Until a dedicated Tally form exists, every "reserve" button opens a
  // WhatsApp chat with the message already written. Swap these two URLs
  // for the form link when it is ready and nothing else changes.
  // Tally form "The Love You're Meant to Build · Reserve a seat" (created 2026-10-18).
  reserveUrl: "https://tally.so/r/xVxEKk",
  // CardCom payment page (Kehilat Chaverim), one link for the whole course.
  joinUrl: "https://secure.cardcom.solutions/EA/EA5/xN7Ukz08fEeQdQvuFH4l9w",
  notifyUrl: whatsapp(
    "Hi Rav Frenkel, please let me know when The Love You're Meant to Build opens on Zoom for chutz la'aretz."
  ),
  askUrl: whatsapp("Hi Rav Frenkel, I have a question about The Love You're Meant to Build."),
  email: site.email,

  cta: {
    primary: "Reserve a seat · first class free",
    secondary: "Ask me a question",
    notify: "Tell me when the Zoom course opens",
    join: "Join the course · 150 ₪ until Oct 28",
  },

  nextClass: {
    label: "Next free first class",
    when: "Tuesday, October 27, 2026 · 7:30 PM",
    where: "Nachlaot, Yerushalayim · the address is sent when you reserve",
    note: "In person, for young women before and during shidduchim. Reserve a seat and you'll get the address, a reminder the day before, and a message from me afterward.",
    zoom: "Chutz la'aretz: the same course opens on Zoom a few weeks later.",
  },
};

export const problem = {
  heading: "Nobody sits a young woman down and teaches her this.",
  paragraphs: [
    "You were taught how to be a good wife. You were told to be a kind, giving person, to build your husband, to make a home. All of that is true.",
    "But almost nobody tells a young woman what a husband owes her. Nobody reads her the ketubah before she stands under the chuppah and hears it read for the first time. Nobody explains that when a man says harei at mekudeshet li, \"you are mine,\" the Torah means \"you are my responsibility\" before it means anything else.",
    "And so young women go out knowing how to give, and not knowing what they are allowed to expect. They say yes because everyone says to. They tolerate what they shouldn't, because nobody told them it was a red flag. Or they say no to a good boy, because nobody told them how a good man grows.",
  ],
  pull: "A young woman who knows what she deserves will never again confuse being wanted with being used.",
};

export const frame = {
  heading: "Dating is not a test. It is how a relationship gets built.",
  paragraphs: [
    "This course does not hand you a checklist and send you out to grade boys against it. Most boys do not show up as finished husband material, and you are not looking for one who does.",
    "You are learning what you need for a full relationship, how to say it, and what to watch for when you do: does he step into it, does he grow into it, does he care? That is how a man grows. A young woman names what she needs and believes in him, and he becomes the man who meets it.",
    "The red flags are the exceptions, the few things that are not growth gaps but stop signs. You will learn those too.",
  ],
};

export const classes = [
  {
    n: 1,
    stage: "Before anyone",
    title: "What You Deserve",
    question: "What am I even looking for?",
    free: true,
    points: [
      "The ketubah, read out loud: food, clothing, a home, healing, and closeness, as his obligations to you.",
      "\"You are mine\" means \"you are my responsibility.\" Why the Torah puts that first.",
      "Safety is your deepest need, and it is not weakness.",
      "The floor that is never negotiable, and what being claimed looks like in small things.",
    ],
  },
  {
    n: 2,
    stage: "Getting ready",
    title: "What You Bring, and Where Your Lines Are",
    question: "Who am I walking in as?",
    points: [
      "What a man needs that he cannot give himself, and why he is incomplete without you.",
      "Your words build him. That starts in dating, not after the chuppah.",
      "Your beauty and the need to be seen: why it is real, why it is holy, and why it is held for one place.",
      "Your lines, set before the first date, not during it.",
    ],
  },
  {
    n: 3,
    stage: "The first dates",
    title: "Do I Want Another Date?",
    question: "What do I do on Tuesday night?",
    points: [
      "What to do on a date, what to ask, and what to leave for later.",
      "The early signs, learned before you go out so you can see them when they happen.",
      "Your body knows before your head. Comfort is the question; everything else can wait.",
      "Saying no early without drama, and taking a no without being knocked out.",
    ],
  },
  {
    n: 4,
    stage: "A developing relationship",
    title: "Could I Build a Life With Him?",
    question: "How do I know who he really is?",
    points: [
      "Not what he does for you. What he does when you get hurt.",
      "Putting your real needs out, one at a time, and watching whether he steps into them.",
      "The things that are not growth gaps but stop signs: anger, going cold, punishing, control.",
      "Everything on the table: his plan, money, where you would live, family, children, hashkafa.",
    ],
  },
  {
    n: 5,
    stage: "The decision",
    title: "Am I Ready to Say Yes?",
    question: "Is this a yes, or is it fear talking?",
    points: [
      "You must be attracted to your husband. Not perfection, but there are things you cannot take.",
      "Settling, pressure, and the fear of being alone, and how to tell them apart from wanting.",
      "Keeping your own self: two overlapping circles, not one inside the other.",
      "Did he grow toward you over these weeks? That, not \"is he finished,\" is the question.",
    ],
  },
  {
    n: 6,
    stage: "Engaged",
    title: "How Do We Get to the Chuppah?",
    question: "What now?",
    points: [
      "Why the Torah makes him give the ketubah before he may touch you, and what you are holding for.",
      "The engagement: staying close without crossing, and finishing the conversations, not postponing them.",
      "Choosing a kallah teacher, and what you should refuse to be taught.",
      "You deserve to be loved. You teach him how.",
    ],
  },
];

export const format = {
  heading: "How a class works",
  items: [
    { k: "One hour", v: "Rav Frenkel teaches. One class a week, six weeks." },
    { k: "Fifteen minutes", v: "Questions, anything you want to ask." },
    { k: "Then he leaves", v: "A woman holds the room: the young women talk through what came up, for as long as they want. Never required, always welcome." },
    { k: "Yerushalayim", v: "The circle is led by Sharona Noy." },
    { k: "Chutz la'aretz", v: "On Zoom, with circles led by women in Lakewood and on Long Island." },
  ],
};

export const investment = {
  heading: "The first class is free.",
  note: "Come, hear it, and decide that night. The other five classes:",
  tiers: [
    { where: "Yerushalayim, in person", early: "150 ₪", late: "200 ₪", unit: "for all five classes" },
    { where: "Chutz la'aretz, on Zoom", early: "$300", late: "$350", unit: "for all five classes" },
  ],
  earlyLabel: "Sign up the night of the first class",
  lateLabel: "Sign up afterward",
  closing: "If the price is the only thing keeping you away, write to me. No one is turned away.",
};

export const why = {
  heading: "Why I teach this",
  image: "/images/yisrael-teaching-conversation.jpg",
  imageAlt: "Rav Yisrael Frenkel in conversation",
  paragraphs: [
    "For more than twenty years I have sat with couples, with chassanim, and with women carrying the pain of marriages that didn't work. Not bad people. Not bad marriages. Two people who were never shown how a husband and a wife actually fit together.",
    "Most of what goes wrong was visible before the engagement. Not because anyone was hiding it, but because the young woman had never been taught what she was looking at, or that she was allowed to need anything at all.",
    "The Torah teaches it in detail. It is in the ketubah, in the words of kiddushin, in the halachos every chassan learns and no kallah is told. I teach it to young women because it is theirs.",
  ],
  signature: "Rav Yisrael Frenkel",
};

export const who = {
  heading: "Who it is for",
  items: [
    "Young women before shidduchim, who want to walk in knowing what they are looking for.",
    "Young women in shidduchim, who are being told to \"just go out again\" and want to know what they are looking at.",
    "Young women who are engaged, and want the last stretch to the chuppah to be theirs.",
    "Mothers: this is the course you wish someone had given you. Send it to her.",
  ],
};

export const faq = [
  {
    q: "Do I have to talk in the circle?",
    a: "No. Many just listen the first week. The circle is there for whoever wants it.",
  },
  {
    q: "Is this a kallah class?",
    a: "No. A kallah class comes later and teaches halacha. This course comes before, and teaches what you need to know before you say yes to anyone.",
  },
  {
    q: "Is anything personal asked of me?",
    a: "Nothing. You are never asked to share anything. Much of the course you will simply hear, and recognize.",
  },
  {
    q: "I'm not in Yerushalayim.",
    a: "The same six classes open on Zoom for chutz la'aretz a few weeks after the Yerushalayim cohort, with their own circles. Leave your name and you will hear first.",
  },
];
