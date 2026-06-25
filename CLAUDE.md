# Claude Code — Poncol Padel House Website Rebuild

## Full-Auto Build Prompt

---

## PROJECT OVERVIEW

Build a complete, production-ready website for **Poncol Padel House (PPH)** — an indoor padel tennis venue in Jakarta, Indonesia. The site is a brand showcase: rich photography, smooth motion, editorial feel. No booking system — bookings are directed to the Courtside app.

**Live reference (legacy site, content only):** https://pph-project.vercel.app/  
**Deploy target:** Vercel (project already exists at pph-project.vercel.app)

---

## TECH STACK — NON-NEGOTIABLE

```
Next.js 14 (App Router, TypeScript)
Tailwind CSS v3
Framer Motion v11
GSAP + ScrollTrigger (for horizontal scroll sections)
Lenis (smooth scroll inertia)
next/font (Google Fonts — no external font CDN)
next/image (all images — blur placeholders, priority on hero)
```

Install these exact packages:

```bash
npx create-next-app@latest poncol-padel-house --typescript --tailwind --app --src-dir
cd poncol-padel-house
npm install framer-motion gsap @gsap/react lenis
npm install -D @types/gsap
```

---

## IMAGE ASSETS

All images are at `C:\PPH-Project\` on Windows. Copy them into `public/images/` in the Next.js project.

**Folder structure to replicate:**

```
public/
  images/
    landscape/     ← from C:\PPH-Project\Landscape\
    portrait/      ← from C:\PPH-Project\Portrait\
    logo/          ← from C:\PPH-Project\Logo\
    courtside/     ← from C:\PPH-Project\Courtside\
```

**Key images to use by name (from what's visible in the file browser):**

Hero / establishing shots (Landscape):

- `dji_fly_20260608_*.JPG` — drone/aerial exterior shots (use for hero background)
- `ST307560.jpg`, `ST307593.jpg` — exterior building
- `ST307631.jpg`, `ST307664.jpg`, `ST307665.jpg` — interior venue wide shots
- `ST307714.jpg`, `ST307716.jpg`, `ST307718.jpg` — furniture/detail shots (rattan benches)
- `ST307723.jpg`, `ST307737.jpg`, `ST307738.jpg` — court interior ambiance
- `ST307783.jpg`, `ST307786.jpg`, `ST307793.jpg` — walkway / interior corridors
- `ST307839.jpg`, `ST307841.jpg`, `ST307847.jpg`, `ST307854.jpg`, `ST307862.jpg` — court shots
- `ST308179.jpg`, `ST308228.jpg`, `ST308240.jpg`, `ST308241.jpg` — action/player shots (landscape)
- `ST308412.jpg` — pink ball shot (use as accent/statement image)
- `ST308500.jpg`, `ST308512.jpg` — detail/cafe area

Action / player shots (Portrait):

- `ST307509.JPG`, `ST307512.JPG`, `ST307577.JPG` — court ambiance with players
- `ST307630.JPG`, `ST307663.JPG` — interior shots
- `IMG_6214.jpg` through `IMG_6359.jpg` — player action portraits

Logo:

- `Poncol Padel House Logo - Transparency White.png` → use on dark backgrounds
- `Poncol Padel House Logo - Transparency Black.png` → use on light backgrounds
- `Poncol Padel House Logo.jpg` → fallback

Courtside app:

- `Courtside1.png` — app mockup screenshot

---

## DESIGN SYSTEM

### Color Palette

```css
--color-black: #0a0a0a; /* near-black base */
--color-forest: #0f1a0a; /* brand dark green */
--color-turf: #3d6b47; /* mid green accent */
--color-rust: #7a2e1f; /* warm rust red (from steel structure) */
--color-cream: #f0ebe0; /* warm cream — primary light tone */
--color-sand: #d4c9b0; /* muted sand — secondary light */
--color-white: #fafaf8; /* off-white text */
```

### Typography

```
Display: "Cormorant Garamond" — weights 300, 400, 600 (italic variant for accent headlines)
Body/UI: "DM Sans" — weights 300, 400, 500
```

Load via `next/font/google`. Use Cormorant Garamond for all H1/H2 display text. DM Sans for nav, captions, body copy, buttons.

### Type Scale

```
hero-xl:    clamp(4rem, 10vw, 9rem)  / Cormorant 300
hero-lg:    clamp(3rem, 7vw, 6rem)   / Cormorant 300 italic
section-h:  clamp(2rem, 4vw, 3.5rem) / Cormorant 400
body:       1rem / DM Sans 300
caption:    0.75rem / DM Sans 400 uppercase tracking-widest
```

### Signature Element

**Court-line SVG dividers** — animated white lines that draw themselves on scroll, styled after padel court markings. Used as section separators. This is the one unique element carried through the site.

---

## SITE STRUCTURE

```
/                  → Landing page (all sections single-page scroll)
/courts            → Courts detail page
/about             → About / story page
/book              → Booking redirect page (Courtside CTA)
```

**Nav:** Fixed top, transparent over hero → transitions to `bg-forest/90 backdrop-blur` on scroll.  
Logo left, links right. Mobile: hamburger → full-screen overlay menu.

---

## PAGE SECTIONS — DETAILED SPEC

### SECTION 1: HERO

**Layout:** Full viewport height (100svh). Dark overlay on background image.

**Background:** Use the best drone/aerial shot from `landscape/dji_fly_*.JPG` as the hero image.

- `next/image` with `fill` and `priority`
- Dark gradient overlay: `linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 100%)`

**Animation sequence (Framer Motion, runs once on page load):**

1. Image fades in (opacity 0→1, 1.2s, ease-out)
2. Image subtly scales from 1.05→1.0 (1.8s, ease-out) — the "breathe in" effect
3. Eyebrow text slides up: `"JAKARTA · INDONESIA"` — DM Sans caption style, cream color (delay 0.4s)
4. Main headline slides up: `"WHERE THE GAME"` (delay 0.6s)
5. Second line italic: `"Comes Alive"` — Cormorant italic (delay 0.8s)
6. Subline fades in: `"Two indoor padel courts in the heart of Jakarta"` (delay 1.0s)
7. CTA button fades up (delay 1.2s)

**Headline typography:**

```
WHERE THE GAME          ← Cormorant 300, hero-xl, cream, uppercase, tracking-tight
Comes Alive             ← Cormorant 300 italic, hero-lg, cream
```

**CTA Button:** `"Explore the Venue"` — pill shape, border 1px cream, cream text, bg transparent. On hover: bg fills cream, text goes forest. Smooth 300ms transition.

**Scroll indicator:** Animated bouncing chevron or thin vertical line at bottom center.

**Parallax:** On scroll, the hero image translates at 0.4x scroll speed using `useScroll` + `useTransform` from Framer Motion.

---

### SECTION 2: INTRO / STATEMENT

**Layout:** Full-width, dark background (`#0f1a0a`). Centered text block. Generous padding.

**Animation:** Text reveals character by character (or word by word) as section scrolls into view. Use Framer Motion `staggerChildren` on words.

**Copy:**

```
PONCOL PADEL HOUSE

Jakarta's premier indoor padel destination.
Two competition-ready courts, built for players who take the game seriously
— and those who are just discovering it.

Est. 2024 · Poncol, Jakarta
```

**Court-line SVG divider** below this section. The SVG path animates `strokeDashoffset` from full to 0 as it scrolls into view. Lines styled as a simplified padel court overhead view.

---

### SECTION 3: PHOTO EDITORIAL — HORIZONTAL SCROLL

This is the **centrepiece section**. A full-width horizontal scroll sequence driven by vertical scroll (GSAP ScrollTrigger pin + horizontal).

**Implementation:**

```tsx
// Pin the section while user scrolls vertically
// Translate the inner track horizontally as scroll progresses
// Each panel is 100vw wide

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(".photo-track", {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".photo-section",
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + document.querySelector(".photo-track").offsetWidth,
      },
    });
  });
  return () => ctx.revert();
}, []);
```

**Panels (8 total):**

1. `ST307560.jpg` — Exterior establishing shot. Caption: `"The Venue"`
2. `ST307631.jpg` or `ST307664.jpg` — Interior wide. Caption: `"Two Courts"`
3. `ST307714.jpg` or `ST307716.jpg` — Rattan bench detail. Caption: `"The Details"`
4. `ST307783.jpg` — Corridor/walkway. Caption: `"The Space"`
5. `ST308412.jpg` — Pink ball action shot. Caption: `"The Game"` (hero panel — full bleed, minimal overlay)
6. `ST308241.jpg` — Player action landscape. Caption: `"The Players"`
7. `ST308179.jpg` — Another action shot. Caption: `"The Court"`
8. `ST307512.JPG` or similar — Ambiance. Caption: `"The Atmosphere"`

**Panel design:**

- Each panel: `100vw × 100vh`, image fills panel completely
- Dark gradient from bottom for caption legibility
- Caption: positioned bottom-left, `DM Sans uppercase tracking-widest 0.7rem` in cream
- Panel number: `01 / 08` etc — tiny, top-right corner

---

### SECTION 4: COURTS — SPLIT LAYOUT

Two columns. Left: sticky text block. Right: scrolling stack of court images.

**Left (sticky):**

```
THE COURTS

Two full-size indoor padel courts, climate-controlled and competition-ready.
Glass walls, artificial turf, and professional lighting — everything the game demands.

· 10m × 20m per court
· Climate-controlled indoor facility
· Glass-walled courts
· Professional LED lighting
· Artificial turf surface
· Available for casual play, coaching, and tournaments
```

**Right (scrolling):** Stack of 3–4 court images that scroll normally as user scrolls, creating the impression the left block is "watching" the images pass.

Images: `ST307839.jpg`, `ST307841.jpg`, `ST307847.jpg`, `ST307862.jpg`

Each image has a subtle Framer Motion entrance (fade + translate up) triggered by `whileInView`.

---

### SECTION 5: VENUE GALLERY — MASONRY GRID

A masonry-style photo grid using CSS Grid with `grid-template-rows: masonry` (or a JS polyfill approach).

Use 6–8 landscape + portrait images mixed:

- `ST307665.jpg`, `ST307673.jpg`, `ST307745.jpg`, `ST307778.jpg`
- `IMG_6323.jpg`, `IMG_6331.jpg`, `IMG_6332.jpg`, `IMG_6347.jpg`

**Animation:** Each image enters with a staggered fade + scale (0.95 → 1.0) as user scrolls into the grid.

Section header: `"THE VENUE"` — Cormorant display, centered.

---

### SECTION 6: ABOUT / STORY

**Layout:** Full-width, cream background (`#f0ebe0`). Dark text. Split: large image left, text right.

Image: Use `ST307638.jpg` or `ST307664.jpg` — interior ambiance shot.

**Copy:**

```
Our Story

Poncol Padel House was born from a simple idea:
Jakarta deserved a padel venue that matched the energy of the sport.

We built two indoor courts in Poncol — a space designed
not just for competition, but for the community that grows around it.
Whether you're a seasoned player or picking up a racket for the first time,
you belong here.

Jakarta · Indonesia
```

**Court-line SVG divider** at top of this section (inverted — dark lines on cream bg).

---

### SECTION 7: BOOKING / COURTSIDE CTA

**Layout:** Full-width dark section (`#0a0a0a`). Two-column: text left, phone mockup right.

**Left:**

```
BOOK A COURT

Reserve your time on the court through Courtside —
our booking platform of choice.

[Download on the App Store]    [Get it on Google Play]
```

Buttons: pill shape, cream border, cream text on dark bg.

**Right:** Display `Courtside1.png` phone mockup with a subtle floating animation (Framer Motion `animate={{ y: [0, -12, 0] }}` infinite, 4s ease-in-out).

---

### SECTION 8: FOOTER

Dark background. Three columns:

```
[PPH Logo White]          NAVIGATE              FIND US
                          Courts                Poncol, Jakarta
Poncol Padel House        About                 Indonesia
Jakarta, Indonesia        Book a Court
                          Instagram             @poncolpadelhouse

                          © 2024 Poncol Padel House. All rights reserved.
```

Court-line SVG divider at the very top of footer.

---

## ANIMATIONS — GLOBAL RULES

### Lenis Setup (`src/app/layout.tsx`):

```tsx
"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

### Framer Motion Defaults:

```tsx
// Reusable fade-up variant
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Stagger container
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
```

### Reduced Motion:

Always wrap animation logic with:

```tsx
const prefersReducedMotion = useReducedMotion();
// Skip animations if true
```

---

## CUSTOM CURSOR (Desktop Only)

A small circle cursor that follows the mouse with a slight lag. On hover over images, it expands and shows text `"VIEW"`.

```tsx
// Implement with Framer Motion useMotionValue + useSpring
// Only render on md+ breakpoints (hide on mobile)
```

---

## PERFORMANCE REQUIREMENTS

- All images via `next/image` with appropriate `sizes` prop
- Hero image: `priority` prop
- Images below fold: lazy loaded (default)
- Use `blurDataURL` placeholder on all images (generate with `plaiceholder` or use inline base64)
- Font: subset via `next/font` — only load weights actually used
- GSAP: only import what's used (`import { gsap } from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger'`)

---

## RESPONSIVE BEHAVIOR

**Mobile (< 768px):**

- Hero: headline scales down, single column
- Horizontal scroll section: convert to vertical scroll stack (disable GSAP pin on mobile, show images stacked)
- Courts section: single column (images above text)
- Masonry grid: 2 columns
- Custom cursor: hidden

**Tablet (768–1024px):**

- Most layouts work as desktop but with tighter padding
- Horizontal scroll: keep enabled

**Desktop (1024px+):**

- Full motion, parallax, horizontal scroll, cursor
- Max content width: 1400px centered

---

## FILE STRUCTURE

```
src/
  app/
    layout.tsx          ← Lenis + font setup + metadata
    page.tsx            ← Landing page (all sections)
    courts/page.tsx
    about/page.tsx
    book/page.tsx
  components/
    ui/
      Navbar.tsx
      Footer.tsx
      Button.tsx
      CourtLineDivider.tsx   ← SVG animated divider
      CustomCursor.tsx
    sections/
      Hero.tsx
      Statement.tsx
      HorizontalGallery.tsx
      Courts.tsx
      VenueGallery.tsx
      About.tsx
      BookingCTA.tsx
    animations/
      variants.ts       ← Framer Motion variants
      hooks.ts          ← useScrollProgress, etc.
  lib/
    fonts.ts            ← next/font config
  styles/
    globals.css         ← CSS custom properties, Tailwind base
```

---

## TAILWIND CONFIG ADDITIONS

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      forest: '#0f1a0a',
      turf: '#3d6b47',
      rust: '#7a2e1f',
      cream: '#f0ebe0',
      sand: '#d4c9b0',
    },
    fontFamily: {
      display: ['var(--font-cormorant)', 'Georgia', 'serif'],
      sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
    },
  }
}
```

---

## VERCEL DEPLOYMENT

After build:

```bash
vercel --prod
```

Ensure `NEXT_PUBLIC_*` env vars are set if needed. The project already exists at `pph-project.vercel.app` — link to existing project during `vercel` init.

---

## FINAL NOTES FOR CLAUDE CODE

1. **Do not hallucinate image paths** — all images are in `public/images/` after copying. Use exact filenames from the file browser screenshots.
2. **Build section by section** — get each section working before moving to the next.
3. **Test GSAP + Lenis compatibility** — initialize Lenis first, then pass its scroll events to GSAP's ScrollTrigger via `ScrollTrigger.scrollerProxy` or use Lenis's RAF loop.
4. **The horizontal scroll section is the most complex** — if GSAP + Lenis conflict, use Framer Motion's `useScroll` + `useTransform` as a fallback for the horizontal track translation.
5. **All text is real content** — use the copy provided in this spec, not lorem ipsum.
6. **The tasteskill.dev skills are available** — use `design-taste-frontend`, `high-end-visual-design`, and `full-output-enforcement` from `C:\PPH-Project\.agents\skills\` as CLAUDE.md context.

---

_Generated for PPH website rebuild — Claude Code full-auto mode_
