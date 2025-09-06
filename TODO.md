AI Content Engine Service Page — Action Plan

Goal: Launch a high-converting, fast, and on-brand landing page at `https://danielemingolla.com/ai-content-service` that drives Calendly bookings.

Conventions
- Keep the design consistent with existing site styles. Reuse `css/style.css` where possible.
- Prefer simple, readable code. Avoid new dependencies unless they provide clear value.
- Mobile-first. Target < 2s load on a typical 4G connection.

Key Inputs (fill before build)
- [ ] Calendly URL: `YOUR_CALENDLY_URL`
- [ ] Loom demo URL: `YOUR_LOOM_URL`
- [ ] Umami site is already installed sitewide (script in `<head>`): `YES`

Directory & Files
- Page path should be folder-based for the clean URL: `ai-content-service/index.html`
- Optional assets folder: `assets/ai-content-service/`

Milestones
1) Plan & Prepare
- [ ] Confirm brand components to reuse (header, footer, typography, buttons)
- [ ] Lock final copy for all sections (H1/H2/paragraphs/CTAs provided below)
- [ ] Define and verify CTA destinations (Calendly link works, opens in new tab)
- [ ] Verify Umami tracking is available and events will be attributed to this page

Acceptance criteria
- Clear list of inputs is documented and ready to implement
- Calendly and Loom URLs tested and reachable

2) Page Scaffolding
- [ ] Create `ai-content-service/index.html`
- [ ] Add HTML5 structure with semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`
- [ ] Reuse global stylesheet(s); add minimal page-specific styles only if necessary (e.g., `css/ai-content-service.css`)
- [ ] Set SEO tags in `<head>`:
  - [ ] `<title>AI Content Engine Service | Daniele Mingolla</title>`
  - [ ] `<meta name="description" content="Scale your organic traffic with a custom-built AI Content Engine. Automate SEO-optimized content creation and capture more leads from Google. Learn more.">`
  - [ ] `<link rel="canonical" href="https://danielemingolla.com/ai-content-service">`

Acceptance criteria
- Page builds locally with no console errors
- Title and meta description are present and correct

3) Section 1 — Hero
Content
- H1: "Turn Your Blog Into an Automated Traffic Engine."
- Sub-headline: "Leverage a custom-built AI pipeline to produce SEO-optimized content at scale, freeing up your team and capturing organic traffic from Google."
- Primary CTA: "See The Proof" — smooth-scroll to Section 4 (`#proof`)
- Secondary CTA: "Book a Free 15-Min Call" — links to Calendly

Tasks
- [ ] Implement hero with responsive layout (stack on mobile)
- [ ] Enable smooth scroll via CSS `html { scroll-behavior: smooth; }` or minimal JS
- [ ] Add Umami tracking to buttons:
  - [ ] Primary CTA (scroll): `data-umami-event="Click - See The Proof"`
  - [ ] Secondary CTA (Calendly): `data-umami-event="Click - Book Call"`

Acceptance criteria
- CTAs visible above the fold on mobile and desktop
- Smooth scroll works and is accessible (respects reduced-motion if configured)

4) Section 2 — The Problem
Content
- H2: "Publishing quality content is relentless. Your team's time is not."
- Body: Concise paragraph highlighting agency cost, in-house speed, and consistency challenges to reach SEO outcomes

Tasks
- [ ] Implement clean, readable text block with adequate contrast and spacing

Acceptance criteria
- Copy is scannable, 60–75ch measure on desktop, readable on mobile

5) Section 3 — The Solution
Content
- H2: "The Solution: A Turnkey \"AI Content Engine\"."
- 3-point list:
  1. Keyword & Content Strategy — identify topics your audience searches for
  2. Custom AI Pipeline — generate, optimize, and publish content automatically
  3. Launch & Handover — deploy and train your team to supervise

Tasks
- [ ] Implement a simple, responsive 3-point list (vertical on mobile, 2–3 columns on desktop if space allows)

Acceptance criteria
- Content is readable; no layout shift when resizing

6) Section 4 — The Proof (Critical)
Content
- H2: "Don't just take my word for it. See the results for yourself."
- Element 1: Live Case Study
  - Title: "Live Case Study: An Automated Blog Attracting Organic Visitors."
  - Description: "I built the system I'm offering to power my own blog. It runs automatically, publishing content about the European tech job market. You can see it live right now."
  - Visual: Screenshot of `https://www.trabajostecnologicoseuropa.com/blog`
  - Button: "View the Live Blog" — links to the blog with `data-umami-event="Click - View Case Study"`
- Element 2: Video Demo
  - Title: "Watch the System in Action (2-Min Demo)"
  - Embed: Loom player wrapped by a `div` with `data-umami-event="Click - Play Demo Video"`

Tasks — Case Study Visual
- [ ] Capture a clean screenshot of the blog homepage (desktop and mobile)
- [ ] Export optimized images (WebP preferred), e.g., 1600px and 800px widths
- [ ] Place under `assets/ai-content-service/` and use `srcset` + `sizes`
- [ ] Add descriptive `alt` text for accessibility and SEO

Tasks — Video Demo
- [ ] Add Loom embed code within a wrapper with `data-umami-event="Click - Play Demo Video"`
- [ ] Lazy-load the iframe (e.g., `loading="lazy"`) and ensure responsive sizing

Acceptance criteria
- Case study button opens the live blog in a new tab
- Loom video plays inline; event tracking fires on first interaction
- Images are optimized and lazy-load offscreen

7) Section 5 — CTA & Booking
Content
- H2: "Ready to put your content on autopilot?"
- Text: "Book a free, no-obligation 15-minute call to discuss your goals and see if this system is the right fit for your business."
- Primary Button: "Book Your Free Strategy Call" — links to Calendly

Tasks
- [ ] Implement a focused CTA block with a single primary action
- [ ] Add `data-umami-event="Click - Book Call"` to the button

Acceptance criteria
- Button is prominent, accessible, and clearly the primary next step

8) Tracking (Umami)
- [ ] Ensure base Umami script is loaded on the page/site
- [ ] Add `data-umami-event` attributes:
  - [ ] "Click - Book Call" on all Calendly CTAs
  - [ ] "Click - View Case Study" on the blog link
  - [ ] "Click - Play Demo Video" on the video wrapper
- [ ] Manually verify events appear in Umami after test clicks

Acceptance criteria
- All events appear in Umami with correct names and counts

9) Performance & Accessibility
- [ ] Use compressed WebP images with `srcset`, `sizes`, and `loading="lazy"`
- [ ] Defer or async any non-critical scripts; no render-blocking additions
- [ ] Avoid new web fonts; reuse existing site fonts
- [ ] Ensure sufficient color contrast and semantic headings order (H1→H2→H3)
- [ ] Test with Lighthouse (Mobile): Performance ≥ 90; Accessibility ≥ 90
- [ ] Verify First Contentful Paint ≤ 1.5s; Total page load ≤ 2s on 4G throttling

Acceptance criteria
- Lighthouse thresholds met on mobile in an incognito test

10) QA & Cross-Device Testing
- [ ] Validate HTML
- [ ] Test responsive layout (360px–1440px)
- [ ] Test links and buttons (Calendly, blog, internal anchors)
- [ ] Verify no console errors

Acceptance criteria
- No broken links; no console errors; layout holds across common breakpoints

11) Launch
- [ ] Commit and push page to `main` (or publish branch)
- [ ] Verify live page at `https://danielemingolla.com/ai-content-service`
- [ ] Verify Umami events on production
- [ ] Optionally add a nav/footer link from the homepage to this page

Acceptance criteria
- Page is live, discoverable, and tracking

Post-Launch (Optional Enhancements)
- [ ] Add JSON-LD structured data (Service, VideoObject) to support rich results
- [ ] Add internal links from relevant pages to strengthen topical authority
- [ ] Add a simple FAQ section for common objections and eligibility

Reference Snippets

Calendly CTA with Umami tracking
```html
<a class="btn btn-primary" href="YOUR_CALENDLY_URL" target="_blank" rel="noopener" data-umami-event="Click - Book Call">Book Your Free Strategy Call</a>
```

Case study link with tracking
```html
<a href="https://www.trabajostecnologicoseuropa.com/blog" target="_blank" rel="noopener" data-umami-event="Click - View Case Study">View the Live Blog</a>
```

Loom embed wrapped for tracking
```html
<div class="video" data-umami-event="Click - Play Demo Video">
  <!-- Replace with Loom embed -->
  <iframe src="YOUR_LOOM_URL" loading="lazy" allow="autoplay; encrypted-media" referrerpolicy="no-referrer" allowfullscreen></iframe>
  <noscript><a href="YOUR_LOOM_URL" target="_blank" rel="noopener">Watch the demo video</a></noscript>
  
</div>
```

Smooth scroll via CSS
```css
html { scroll-behavior: smooth; }
```

Image with srcset and lazy loading
```html
<img 
  src="assets/ai-content-service/blog-1600.webp" 
  srcset="assets/ai-content-service/blog-800.webp 800w, assets/ai-content-service/blog-1600.webp 1600w" 
  sizes="(max-width: 768px) 100vw, 800px" 
  alt="Homepage of the automated blog about European tech jobs" 
  loading="lazy" />
```

Done Criteria (overall)
- [ ] Page loads in ≤ 2 seconds on mobile (4G throttle) with Lighthouse ≥ 90
- [ ] All CTAs point to correct URLs and are tracked in Umami
- [ ] Visuals (screenshot + video) render responsively and are optimized
- [ ] Copy matches the requirements and is typo-free
- [ ] Page is linked internally or discoverable via sitemap


