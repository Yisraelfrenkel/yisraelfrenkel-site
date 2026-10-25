# Homepage design notes — round two

## Idea in one sentence

**A teacher, one human reality, four doors:** Rav Yisrael’s portrait and central belief lead into four large photographed areas of teaching, with all eleven topics visible inside them.

## Reference and visual system

The parent reference is the later ChatGPT-edited Or HaYichud page: warm, expressive and confidently promotional without becoming loud. The homepage uses its visual grammar rather than the earlier forest-green redesign.

### Palette

- `#FFFAF4` — warm white ground.
- `#FFF0E2` — apricot wash behind invitations and transitions.
- `#2B1D2E` — deep plum for belief, testimonials and footer.
- `#3A2740` — raised plum surface.
- `#E2634A` — coral primary action and active links.
- `#C9503A` — deeper coral for hover and accessible text accents.
- `#E9A23B` — gold for italic emphasis and small moments of warmth.
- `#1F1A17` — warm black text.
- `#5C524B` — secondary text.

### Type and surfaces

- **Fraunces** is the display face. It has more personality and confidence than Cormorant here and directly relates the homepage to the preferred Or HaYichud version.
- **Inter** remains the body and interface face.
- Large images and important quotations use 24–30px radii and a long, soft brown shadow. Buttons are fully rounded. Topic rows inside each door remain editorial and calm rather than becoming eleven identical cards.

## Page architecture and borrowed patterns

- **Teacher-first cinematic hero:** the chosen portrait and one large sentence do most of the work, as on strong personal-teacher and class platforms.
- **Inviting portrait:** the final hero uses the laughing Aron Kodesh photograph, cropped from the arch to just below Rav Yisrael's clasped hands; chandelier and table are intentionally excluded.
- **Trust row without invented proof:** “20+ years in private practice,” “Torah and psychology,” and the exact credential line.
- **Dark belief statement:** a single large thesis gives the page an idea worth remembering, with gold italic emphasis.
- **Four photographed doors:** Before the chuppah, Desire and purpose, Healing, and Torah itself. Each has a real teaching/study photograph or approved painting, followed by its topic index. This gives broad subject matter a few memorable entrances.
- **Four-part path row:** a visual overview—Prepare, Understand desire, Heal, Return to Torah—echoes Or HaYichud’s “each one builds on the last” section without implying a mandatory sequence.
- **Verified voices:** two testimonials are copied verbatim from `src/data/content.js` and signed only with their supplied initials.
- **Repeated booking path:** every booking button is immediately paired with WhatsApp and email.

## Tree idea

The tree becomes conceptual rather than illustrated. The hero is the root: one view of the human being. The four doors are the main limbs, and the eleven visible topic links are the branches. A fine coral connector and numbered door labels preserve the sense of one organism without clip-art.

## Copy decisions

- All eleven branch titles and descriptions remain verbatim from `src/data/home.js`.
- The hero title, lead and exact credential line remain unchanged.
- Both testimonials are verbatim from `src/data/content.js`.
- New interface copy is limited to section introductions, the large belief statement, the four-part overview, and short booking transitions. These are framing lines, not claims or quotations attributed to Rav Yisrael.
- “Marriage, Understood” remains unchanged pending the owner’s final naming decision.
- Final tightening removes photo numbering, simplifies the header action, turns topic status labels into clear pills, and uses one uninterrupted photograph for every door.
