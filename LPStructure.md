# Morphysics — Landing Page Structure Plan

> **Scope:** Pure structural blueprint — section layout, content hierarchy, component inventory, and asset mapping.  
> **No color, no typography, no visual styling defined here.**

---

## Asset Inventory

| File | Type | Planned Use |
|---|---|---|
| `Mascot.json` | Lottie animation | Hero section floating guide |
| `Trailer_Morphysics.mp4` | Video | ~~Removed from LP~~ — archive asset, not used on landing page |
| `UniLogo_UTS.png` | Logo | University Partners strip |
| `UniLogo_hcmue.png` | Logo | University Partners strip |
| `UniLogo_hcmus.png` | Logo | University Partners strip |
| `UniLogo_hcmut.png` | Logo | University Partners strip |
| `UniLogo_iuh.png` | Logo | University Partners strip |
| `UniLogo_uit.png` | Logo | University Partners strip |
| `Pics_physics class.jpg` | Photo | Problem & Audience section — teacher/classroom context |
| `Pics_Study groups.jpeg` | Photo | Problem & Audience section — student context |
| `Pics_girls group.jpg` | Photo | Testimonials section — avatar context |

---

## Page Sections — Top to Bottom

---

### SECTION 0 — Navigation Bar (Sticky)

**Purpose:** Global navigation + quick access to sign-up and login.

**Layout:** Single horizontal bar, full-width, sticky on scroll.

**Left side:**
- Morphysics logo / wordmark

**Center links (sub-pages — routes to be built later):**
- Assets
- FAQ
- About Us

**Right side (actions):**
- Dark / Light mode toggle button
- Sign Up button (primary CTA style)
- Login button (ghost/outline style)

**Behavior:**
- On scroll: height reduces, background applies a subtle blur/frosted glass effect.
- Mobile: collapses into hamburger menu with a slide-in drawer.

---

### SECTION 1 — Hero

**Purpose:** First impression, core value statement, immediate engagement.

**Layout:** Two-column, full-viewport-height split.

**Left column (~50% width):**
- Small label badge above headline: `AI-Powered · Interactive · Physics`
- Main headline: **"Make the Static Dynamic."**
- Sub-headline: Morphysics transforms abstract physics problems into real-time, AI-generated interactive 2D simulations — instantly.
- Supporting copy: "Input your problem as text, an image, or a document. Watch physics come alive."
- Primary CTA button: **"Try it Free"** → routes to Sign Up
- Secondary CTA button: **"Watch the Demo"** → scrolls to Product Demo section

**Right column (~50% width):**
- **Full 2D Interactive Physics Sandbox** (the main wow-moment)
  - A feature-rich, real-time physics environment built with **Matter.js**
  - This is NOT a simple demo — it is a fully interactive sandbox that showcases Morphysics' core engine capability

**Sandbox contents & scene setup:**
- Default scene has a pre-built arrangement (e.g., stacked boxes on platforms, a ramp with a rolling ball, hanging pendulum on a pin joint) to immediately show complexity and richness
- All objects are rendered with visible labels: mass (kg), velocity vector arrows, and color-coded body type (dynamic / static / constrained)
- Background grid lines with scale markers (every 1 m) to give spatial context
- Gravity direction indicator (arrow icon in corner)

**User interactions:**
- **Drag & drop objects** — click any body to pick it up and reposition it mid-simulation
- **Spawn new objects** — floating toolbar with object types:
  - ⬤ Circle (with radius slider)
  - ▬ Rectangle (with width/height inputs)
  - △ Triangle / polygon
  - 📌 Static anchor (wall/pin — objects collide off it but it doesn't move)
- **Apply impulse** — right-click + drag on any object to apply a directional force/impulse (shown as an arrow that disappears on release)
- **Delete objects** — select + press Delete or a trash icon
- **Pause / Resume** — spacebar or on-screen button; when paused, show freeze-frame with all force labels visible
- **Slow motion mode** — toggle to 0.25× speed to observe complex collisions frame-by-frame

**Environment controls (side panel):**
- `Gravity g` — slider (0 → 20 m/s², default 9.8) with planet presets: 🌙 Moon (1.6) · 🌍 Earth (9.8) · 🪐 Jupiter (24.8)
- `Air resistance` — toggle + slider for drag coefficient (0 = vacuum, 1 = thick air)
- `Restitution (bounciness)` — global slider (0 = no bounce, 1 = perfect elastic)
- `Friction` — global slider per material surface
- `Reset scene` button — restores default arrangement
- `Clear all` button — empty canvas for user to build from scratch

**Constraints & joints (advanced — adds huge engagement):**
- Users can **pin two objects together** (hinge joint) to create swinging arms, pendulums, seesaws
- **Distance constraint** — connect two objects with a rigid rod (e.g., create a crank mechanism)
- **Spring joint** — connect two objects with a spring that oscillates (spring-mass system)

**Live data readouts (always visible):**
- Selected object panel: mass, velocity (x/y), position, kinetic energy
- Global panel: total objects in scene, simulation time elapsed, total KE of system

**Overlay hint system (onboarding):**
- First-time tooltip sequence: `"Drag me" → "Apply a force" → "Try slow motion" → "Change gravity"`
- Hints disappear after user interacts; can be recalled via a `?` help button

**Physics engine:** Matter.js (browser-native, ~87 KB gzip, no server required)

**Mascot placement:**
- `Mascot.json` (Lottie — via `@lottiefiles/react-lottie-player`) sits at the bottom-left of the right column, animated, idle loop. On first load plays a "welcome" gesture pointing toward the sandbox.

---

### SECTION 2 — University / Institution Partners Strip

**Purpose:** Build immediate credibility and social proof right after the hero.

**Layout:** Narrow horizontal band, full-width, auto-scrolling logo ticker (marquee loop).

**Headline (small, centered, above ticker):** "Trusted by leading institutions across Vietnam"

**Logos (all 6 — use actual files, displayed in a looping row):**
- `UniLogo_UTS.png`
- `UniLogo_hcmue.png`
- `UniLogo_hcmus.png`
- `UniLogo_hcmut.png`
- `UniLogo_iuh.png`
- `UniLogo_uit.png`

**Behavior:**
- Logos displayed desaturated by default, full-color on hover.
- Infinite horizontal scroll animation (CSS or JS marquee).

---

### SECTION 3 — Product Overview

**Purpose:** Clearly communicate what Morphysics does and why it is uniquely valuable — in a concise, scannable block.

**Layout:** Single part — centered headline + sub-copy + 3 feature cards side by side + CTA below.

**Section headline:** "Your AI-Powered Physics Lab"

**Sub-copy:** "Input any physics problem. Morphysics reads it, extracts every variable, and instantly builds a fully interactive 2D simulation — tailored to your exact scenario."

**3 Feature highlight cards (side by side):**

| # | Icon concept | Card Title | Card Body |
|---|---|---|---|
| 1 | Brain / AI scan icon | **AI Problem Extraction** | Type, photograph, or upload a physics problem. The AI identifies every variable — mass, angle, velocity, friction — without you lifting a pen. |
| 2 | Physics canvas / vector arrows icon | **Dynamic 2D Simulation** | No pre-built templates. Every environment is generated on-the-fly from your problem's unique parameters. Forces, motion, and energy behave exactly as they should. |
| 3 | Sliders + play button icon | **Interactive Variable Control** | Tweak gravity, friction, mass, or initial velocity in real time with on-screen controls. See how changing one variable cascades through the entire system — instantly. |

**CTA below cards:** "Ready to see your problem come alive?" → **"Start for Free"** button

---

### SECTION 4 — The Problem & Who We Solve It For (Combined)

**Purpose:** Connect emotionally with each target audience by naming their exact pain, then immediately showing how Morphysics resolves it.

**Layout:** Full-width section with a bold section headline, followed by 3 persona blocks in an alternating left-right image + text layout (like a classic "features" alternating row).

**Section headline:** "Physics the Way It Should Be Learned"
**Section sub-copy:** "Whether you're a student drowning in abstract theory, a teacher limited by a 45-minute period, or a school stretched by aging infrastructure — Morphysics was built for you."

---

#### Persona Block 1 — Students

**Image:** `Pics_Study groups.jpeg` (right side)
**Text side (left):**
- Label badge: `For Students · Age 12–18`
- Headline: **"Stop Memorizing. Start Understanding."**
- Problem: Physics is filled with invisible forces, abstract vectors, and formulas that don't connect to reality. You copy diagrams from a board and hope it makes sense later.
- Solution: With Morphysics, input your exact homework problem — and watch the scenario come alive. Interact with the objects. Change a variable. See what actually happens.
- Stat hook: Millions of Vietnamese students face heavy exam pressure built entirely around memorization, not comprehension.
- CTA link: `Try as a Student →`

---

#### Persona Block 2 — Teachers

**Image:** `Pics_physics class.jpg` (left side)
**Text side (right):**
- Label badge: `For Teachers`
- Headline: **"A Full Lab, Ready in Seconds."**
- Problem: Setting up physical lab equipment for 40–50 students inside a single 45-minute class period is a logistical nightmare. Most teachers skip the experiment.
- Solution: Deploy a fully customized simulation for your entire class instantly. No equipment. No setup. No teardown. Just a visual, interactive learning moment that sticks.
- Stat hook: The zero-setup model recovers the time lost to preparation, maximizing every minute of instructional time.
- CTA link: `Try as a Teacher →`

---

#### Persona Block 3 — Schools & Institutions

**Image:** (abstract or decorative — no specific photo needed, use a neutral graphic or the `Pics_physics class.jpg` wide-crop)
**Text side (left):**
- Label badge: `For Schools & Institutions`
- Headline: **"Scale Learning Without the Cost."**
- Problem: Physical lab infrastructure degrades, requires expensive upkeep, and can't scale to every student. Underfunded schools simply go without.
- Solution: An institutional license brings a complete virtual physics lab to every student in the school — at 10,000–13,000 VND per student per year. Less than a coffee.
- Stat hook: 666+ secondary and high schools in HCMC alone. Each one is a potential lab upgrade with zero hardware.
- CTA link: `Contact for Institutional Pricing →`

---

### SECTION 5 — Interactive Demo Lab ("Physics Playground")

**Purpose:** Let visitors experience real 2D physics simulations directly in the browser — no sign-up required. These are curated, pre-built scenarios based on actual Vietnamese high school physics curriculum topics.

**Layout:** Section headline + sub-copy at top. Below: a tab or horizontal scroll selector to switch between scenarios. The active scenario canvas occupies the main area with controls on the side or below the canvas.

**Section headline:** "Physics in Your Hands"
**Section sub-copy:** "Pick a scenario from your textbook. Adjust the values. Watch real physics play out — right here, no sign-up needed."

**Tab navigation bar (scenario selector):**
> Projectile Motion | Inclined Plane | Simple Pendulum | Collision Lab | Free Fall & Gravity

---

#### Demo Canvas 1 — Projectile Motion

**Real-life situation:** "You kick a football at an angle toward the goal. How far does it travel? How high does it go before coming back down?"

**What the canvas shows:**
- A football (or generic ball) launched from the left side of the canvas
- A dotted parabolic trajectory path drawn in real time as it flies
- Labeled vectors: horizontal velocity (Vₓ), vertical velocity (Vᵧ) as arrows on the ball
- Ground plane with a simple goal post or target on the right for context
- Landing marker with distance label: `Range: X m`
- Maximum height marker: `Max Height: Y m`
- Time-of-flight counter: `Time: Z s`

**Interactive controls (panel beside or below canvas):**
- `Launch Angle θ` — slider (0° → 90°, step 1°, default 45°)
- `Initial Speed v₀` — slider (5 m/s → 30 m/s, default 15 m/s)
- `Gravitational Acceleration g` — slider (1 m/s² → 15 m/s², default 9.8 m/s²) — lets students explore "what if this happened on the Moon?"
- Reset button · Launch button

**Physics covered (Lớp 10 — Chapter: Kinematics):**
- Equations of motion under constant gravity
- Decomposition of velocity vectors
- Range formula: `R = v₀² sin(2θ) / g`
- Max height: `H = v₀² sin²θ / 2g`

**Engagement hook:** "Try launching at exactly 45°. Why does that give the maximum range?"

---

#### Demo Canvas 2 — Inclined Plane (Ramp & Friction)

**Real-life situation:** "A wooden crate is pushed up a ramp to load into a truck. How much force does it take? Does it slide back down if you let go?"

**What the canvas shows:**
- A 2D ramp drawn at an angle, with a solid surface texture
- A labeled rectangular block (crate) sitting on the ramp
- Force vectors drawn on the block, labeled:
  - `W` (weight/gravity — straight down, blue)
  - `N` (normal force — perpendicular to ramp surface, green)
  - `f` (friction force — along ramp surface opposing motion, orange)
  - `F_applied` (user-applied force up the ramp, shown only when "push" toggle is on, red)
- Color-coded net force arrow showing resultant
- Motion state indicator: `SLIDING ↓` / `STATIC` / `ACCELERATING ↑`
- Acceleration readout: `a = X m/s²`

**Interactive controls:**
- `Ramp Angle θ` — slider (5° → 75°, default 30°)
- `Mass of Block m` — slider (1 kg → 20 kg, default 5 kg)
- `Friction Coefficient μ` — slider (0 → 0.9, step 0.05, default 0.3) — labeled: `Smooth ←——→ Rough`
- `Apply Push Force` — toggle + slider (0 N → 200 N) for upward force
- Reset button

**Physics covered (Lớp 10 — Chapter: Newton's Laws & Friction):**
- Newton's Second Law: `F_net = ma`
- Normal force on incline: `N = mg cosθ`
- Friction: `f = μN`
- Condition for sliding: `mg sinθ > μmg cosθ` → `tanθ > μ`

**Engagement hook:** "Find the minimum friction coefficient that keeps the block still at 40°."

---

#### Demo Canvas 3 — Simple Pendulum

**Real-life situation:** "A child swings on a playground swing. Why does a longer swing take more time to go back and forth? Does the weight of the child matter?"

**What the canvas shows:**
- A ceiling anchor point at the top center of the canvas
- A thin rod/string with a ball (bob) hanging from it
- Smooth pendulum swinging animation (physics-accurate arc)
- Trajectory arc trace (fades over time)
- Labeled annotations:
  - `L` (length of string, shown as a dashed bracket)
  - `θ` (current angle from vertical, shown as arc)
  - Velocity arrow on the bob (max at bottom, zero at peak)
- Energy bar below canvas: split into `Kinetic` and `Potential` — shifts in real time as it swings
- Period readout: `T = X.XX s`
- Live angle counter: `θ = XX°`

**Interactive controls:**
- `String Length L` — slider (0.5 m → 5 m, default 1 m)
- `Initial Angle θ₀` — slider (5° → 60°, default 20°)
- `Mass of Bob m` — slider (0.1 kg → 5 kg, default 0.5 kg) — students discover mass has no effect on period
- `Gravity g` — slider (1 → 15 m/s², default 9.8) — explore Moon / Jupiter gravity
- Pause / Resume button · Reset button

**Physics covered (Lớp 10 — Chapter: Oscillations / Dao động):**
- Period formula: `T = 2π √(L/g)`
- Conservation of mechanical energy
- Simple harmonic motion (small angle approximation)

**Engagement hook:** "Change the mass from 0.1 kg to 5 kg. Did the period change? Why not?"

---

#### Demo Canvas 4 — Collision Lab

**Real-life situation:** "Two billiard balls collide on a table. A car hits a stationary vehicle at a junction. What happens to speed and direction after the crash?"

**What the canvas shows:**
- A flat horizontal surface (billiard table / road surface texture)
- Two circular objects (Object A on the left moving right, Object B stationary or moving left)
- Velocity arrows displayed above each object (labeled `v₁` and `v₂`)
- After collision: updated velocity arrows with new values
- Momentum readout before and after: `p_before = X kg·m/s` · `p_after = Y kg·m/s`
- Kinetic energy readout before and after: `KE_before = X J` · `KE_after = Y J`
- Conservation check badge: `✅ Momentum Conserved` / `ℹ️ Energy Lost (Inelastic)`
- Optional: slow-motion replay button to see the collision frame-by-frame

**Interactive controls:**
- `Mass A (m₁)` — slider (1 kg → 20 kg, default 5 kg)
- `Mass B (m₂)` — slider (1 kg → 20 kg, default 5 kg)
- `Velocity A (v₁)` — slider (-20 m/s → 20 m/s, default 10 m/s)
- `Velocity B (v₂)` — slider (-20 m/s → 20 m/s, default 0 m/s)
- `Collision Type` — toggle: `Elastic` / `Perfectly Inelastic` / `Partially Inelastic (e = 0.5)`
- Launch button · Reset button · Slow-Mo replay button

**Physics covered (Lớp 10 — Chapter: Impulse & Momentum / Va chạm):**
- Conservation of linear momentum: `m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'`
- Elastic collision: KE conserved; Inelastic: KE partially lost
- Coefficient of restitution `e`

**Engagement hook:** "Make both masses equal and give A all the speed. What happens to B after an elastic hit? (Spoiler: they swap.)"

---

#### Demo Canvas 5 — Free Fall & Air Resistance

**Real-life situation:** "A feather and a hammer are dropped from the same height. Which hits the ground first — and why does the answer change in a vacuum?"

**What the canvas shows:**
- A vertical drop-shaft with height markers (0 m at top, down to 50 m)
- Two objects falling side by side (left: feather with high drag, right: bowling ball with low drag)
- Labeled drag force arrow above each object pointing up (magnitude changes with speed)
- Labeled gravity arrow below each object pointing down
- Real-time speed readout next to each object: `v = X m/s`
- Terminal velocity indicator: glows when object reaches terminal velocity (`v_t = X m/s`)
- Ground collision splash effect + time to impact displayed: `Feather: X.X s` / `Ball: Y.Y s`

**Interactive controls:**
- `Height H` — slider (10 m → 100 m, default 50 m)
- `Object 1 mass` — slider (0.01 kg → 10 kg)
- `Object 1 drag coefficient Cd` — slider (0.01 → 2.0) — labeled with examples: `Sphere: 0.47 · Feather: ~1.5`
- `Object 2 mass & drag` — same sliders
- `Air density` — toggle: `Normal Air` / `Vacuum (no drag)`
- Drop button · Reset button

**Physics covered (Lớp 10 — Chapter: Free Fall / Rơi tự do + Fluid Resistance):**
- Free fall: `v = gt`, `s = ½gt²` (vacuum case)
- Drag force: `F_d = ½ρCdAv²`
- Terminal velocity: `v_t = √(2mg / ρCdA)`
- Newton's Second Law with drag: `ma = mg - F_d`

**Engagement hook:** "Set Air Density to Vacuum. Now both objects hit at the exact same time. This is what Galileo proved."

---

**Below all canvases — CTA block:**
- Copy: "These are just 5 of the infinite scenarios Morphysics can generate from your own problems."
- Button: **"Generate My Own Simulation"** → routes to Sign Up

---

### SECTION 6 — Key Stats

**Purpose:** Anchor credibility with data — the market scale and the affordability of the solution.

**Layout:** Full-width horizontal band. 4 large stat numbers centered with a label below each.

**Stats:**

| Number | Label |
|---|---|
| **666+** | Secondary & high schools in HCMC |
| **~1.1M** | Students in our target market |
| **10,000–13,000 VND/yr** | Per student via institutional plan — less than a coffee |
| **Real-Time** | Physics simulation — zero setup, instant results |

**Behavior:** Numbers animate (count up) when the section enters the viewport on scroll.

---

### SECTION 7 — Pricing Plans

**Purpose:** Convert interest into action. Four tiers (Free + 3 paid) map to every audience segment.

**Layout:** 4-column pricing cards. The "Premium" card (center-right) has a "Most Popular" badge and slightly elevated visual prominence.

---

**Plan 1 — Explorer (Free)**
- Target: Any student wanting to try before committing
- Price: **Free** · No credit card required
- Features:
  - Access to Physics Playground (5 pre-built demo canvases)
  - Text-to-simulation (3 inputs per day)
  - Basic variable controls: gravity, friction, mass
  - Standard 2D simulation rendering
  - Community support via forum
- CTA button: **"Try for Free"**

---

**Plan 2 — Basic**
- Target: Individual students (self-study, homework help)
- Price: **70,000 đ / month**
- Features:
  - Everything in Explorer
  - Text-to-simulation (unlimited daily inputs)
  - Image-to-Simulation (photo upload of problem)
  - Full variable control panel
  - Save & revisit simulations (up to 20 saved scenes)
  - Email support
- CTA button: **"Start Basic"**

---

**Plan 3 — Premium** *(Most Popular)*
- Target: Serious students & individual educators
- Price: **150,000 đ / month**
- Features:
  - Everything in Basic
  - Docs-to-Simulation (PDF / document upload)
  - Unlimited saved simulation scenes
  - Export simulation as animated GIF
  - Advanced force & constraint tools (springs, joints, hinges)
  - Priority email support
  - Early access to new simulation types
- CTA button: **"Go Premium"**

---

**Plan 4 — School Package**
- Target: Schools, classes, educational institutions
- Price: **7,500,000 đ / 1 semester**
- Features:
  - Everything in Premium
  - Unlimited seats for all students in the school
  - Teacher admin dashboard (assign simulations to classes)
  - Class usage & engagement analytics
  - Custom onboarding session & staff training
  - Dedicated account manager
  - SLA-backed technical support
  - Priority feature requests
- CTA button: **"Contact Us for School Access"**

**Below the 4 cards:**
- Fine print: "All prices in VND. School package billed per semester. No hidden fees."
- FAQ link: "Questions about pricing? → See full FAQ"

---

### SECTION 8 — Testimonials

**Purpose:** Social proof from real or representative users across all three audience types.

**Layout:** 2-row grid of 3 cards each (total 6) on desktop; single-column swipe carousel on mobile.

**Card structure per testimonial:**
- Circular avatar photo (cropped from `Pics_Study groups.jpeg` or `Pics_girls group.jpg` as placeholder avatars)
- Full name · Role · Institution name
- Star rating (⭐⭐⭐⭐⭐)
- Quote (2–4 sentences)

**6 Placeholder quotes (structured content — replace with verified real quotes before launch):**

---

**Quote 1 — Student, Grade 11:**
> *"I used to dread physics homework because I could never picture what the problem was describing. With Morphysics, I just type the question and watch it happen in real time. My exam score went from 6.5 to 9 in one semester."*
> — **Nguyễn Minh Tú**, Grade 11 · THPT Nguyễn Thị Minh Khai, HCMC

---

**Quote 2 — Student, Grade 10:**
> *"The pendulum simulation blew my mind. I kept changing the string length and watching the period change — I finally understood WHY the formula works, not just how to plug numbers in. No textbook ever did that for me."*
> — **Trần Quỳnh Anh**, Grade 10 · THPT Lê Hồng Phong, HCMC

---

**Quote 3 — Physics Teacher:**
> *"I demonstrated a projectile motion problem for my entire class in under 60 seconds. The students were completely glued to the screen. I haven't seen engagement like that in 8 years of teaching. I use it every week now."*
> — **Thầy Phạm Hữu Hùng**, Physics Teacher · THCS Lê Quý Đôn, HCMC

---

**Quote 4 — Physics Teacher:**
> *"Before Morphysics, I had to spend 20 minutes setting up a demonstration that students would only half-understand anyway. Now I open a simulation, and they're asking me questions I've never been asked before. They actually want to stay after class."*
> — **Cô Lê Thị Hương**, Physics & STEM Teacher · THPT Gia Định, HCMC

---

**Quote 5 — School Administrator / Deputy Principal:**
> *"Deploying Morphysics across our school was straightforward and fast. The admin dashboard gives me a clear view of which classes are using it actively and how student engagement is trending by week. It's the best EdTech investment we've made."*
> — **Ms. Nguyễn Lan Anh**, Deputy Principal · THPT Trần Phú, HCMC

---

**Quote 6 — Parent:**
> *"My daughter was failing physics. I tried tutors, extra workbooks — nothing clicked. One week with Morphysics and she could finally explain force diagrams to me herself. Honestly the best 150,000đ I've ever spent."*
> — **Chị Võ Thị Mai**, Parent of a Grade 10 student · Bình Dương

---

### SECTION 9 — Contact

**Purpose:** Provide a direct, low-friction channel for inquiries — especially institutional/B2B leads and press.

**Layout:** Two-column layout. Left: contact information and context copy. Right: contact form.

---

**Left column:**
- Section headline: **"Let's Talk Physics"**
- Sub-copy: "Have questions about a plan, want to schedule a demo for your school, or just curious? We're happy to hear from you."

- Contact details block:
  - 📧 Email: `hello@morphysics.io` *(placeholder — confirm real address)*
  - 📍 Location: Ho Chi Minh City, Vietnam
  - 🕐 Response time note: "We typically reply within 1 business day."

- Inquiry type options (for context — these feed into the form's dropdown):
  - Student / Personal use
  - Teacher / Educator plan
  - School / Institutional licensing
  - Press & Media
  - Technical support
  - Other

- Mascot `Mascot.json` (small Lottie, decorative placement below contact info)

---

**Right column — Contact Form:**

| Field | Type | Placeholder / Label |
|---|---|---|
| Full Name | Text input | "Your name" |
| Email Address | Email input | "your@email.com" |
| Inquiry Type | Dropdown select | "What are you reaching out about?" |
| Institution / School Name | Text input (optional) | "School or organization (if applicable)" |
| Message | Textarea (4 rows) | "Tell us what's on your mind..." |
| Submit | Primary button | **"Send Message"** |

**Form behavior:**
- **Template only** — no backend or submission logic for now. The form is UI-only.
- Client-side validation present (visual only — required field highlights on empty submit attempt)
- On submit button click: show a static success state as a UI mock: "✅ Message sent! We'll be in touch within 1 business day."
- No actual data is sent — backend integration to be wired in a future sprint.

---

### SECTION 10 — Footer

**Purpose:** Navigation, legal, and brand closure.

**Layout:** 4-column footer grid above a bottom bar.

**Column 1 — Brand:**
- Morphysics logo / wordmark
- Tagline: *"Make the Static Dynamic."*
- Small `Mascot.json` Lottie icon (idle loop, subtle)

**Column 2 — Product:**
- Physics Playground (scrolls to demo section)
- Pricing
- Assets *(sub-page — build later)*
- Changelog / Updates *(optional)*

**Column 3 — Company:**
- About Us *(sub-page — build later)*
- FAQ *(sub-page — build later)*
- Contact
- Blog / Resources *(optional)*

**Column 4 — Legal & Connect:**
- Privacy Policy
- Terms of Service
- Social links: Facebook · YouTube · GitHub *(as applicable)*

**Bottom bar (full-width rule above):**
- Left: "© 2026 Morphysics. All rights reserved."
- Right: "Made with ❤️ in Ho Chi Minh City, Vietnam."

---

## Section Flow Summary

```
[0]  NavBar (sticky — collapses on scroll)
  │
[1]  Hero — Tagline + FULL 2D Physics Sandbox + Mascot (Lottie)
       └─ Matter.js full sandbox: multi-object, drag/spawn/joint/impulse
  │
[2]  University Partners Strip — 6 logos, infinite ticker
  │
[3]  Product Overview — 3 Feature Cards (AI Extract · Dynamic Sim · Variable Control)
  │
[4]  Problem & Audience — Combined Section (alternating rows)
       ├─ Block 1: Students → Pics_Study groups.jpeg
       ├─ Block 2: Teachers → Pics_physics class.jpg
       └─ Block 3: Schools & Institutions → (neutral graphic)
  │
[5]  Interactive Demo Lab — "Physics Playground" (5 tab-switched 2D canvases)
       ├─ Canvas 1: Projectile Motion (football scenario)
       ├─ Canvas 2: Inclined Plane / Friction (crate on ramp)
       ├─ Canvas 3: Simple Pendulum (playground swing)
       ├─ Canvas 4: Collision Lab (billiard balls / cars)
       └─ Canvas 5: Free Fall & Air Resistance (feather vs. hammer)
  │
[6]  Key Stats — 4 animated number counters
  │
[7]  Pricing Plans — 4-tier table (Explorer Free · Basic 70k · Premium 150k · School 7.5M/sem)
  │
[8]  Testimonials — 6 quote cards (2×3 grid / mobile carousel)
  │
[9]  Contact — Info + Contact Form (UI template only, no backend)
  │
[10] Footer — 4-column grid + bottom bar
```

---

## Decisions Resolved

| Topic | Decision |
|---|---|
| **Hero Widget** | Full Matter.js sandbox — multi-object, spawn, drag, joint, impulse, gravity presets, slow-mo. NOT a simple demo. |
| **Video (Trailer)** | Removed from landing page entirely. Asset archived but not used. |
| **Contact Form** | UI template only — no backend. Static success state on submit click. Backend to be wired in a future sprint. |
| **Pricing** | 4 tiers confirmed: Free · Basic (70,000đ/mo) · Premium (150,000đ/mo) · School (7,500,000đ/semester) |
| **Testimonials** | 6 placeholder quotes written (2 students, 2 teachers, 1 admin, 1 parent). Replace with verified quotes before launch. |
| **Mascot / Lottie** | Use **`@lottiefiles/react-lottie-player`** — actively maintained, tree-shakeable, works with React 18+, no peer-dep conflicts. |
| **Curriculum alignment** | Demo canvases target Lớp 10 syllabus (Chương trình GDPT 2018). Lớp 11 expansion (electricity, waves) can be added as extra tabs in a future iteration. |
