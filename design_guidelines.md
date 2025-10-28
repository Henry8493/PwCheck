# Password Strength Analyzer - Design Guidelines

## Design Approach
**System:** Carbon Design System (enterprise data-focused)
**References:** 1Password, Auth0, Bitwarden for security UI patterns
**Principles:** Trust through transparency, professional restraint, educational clarity, privacy-first messaging

## Typography System
**Primary Font:** IBM Plex Sans (via Google Fonts CDN)
- Headings: 600 weight, tight letter-spacing (-0.02em)
- Body: 400 weight, optimal line-height (1.6)
- Code/Technical: IBM Plex Mono 400
- Hero: 700 weight, 3xl to 5xl responsive
- Section Headers: 600 weight, 2xl to 3xl
- Feature Titles: 600 weight, xl
- Body Text: 400 weight, base to lg
- Labels/Captions: 500 weight, sm

## Layout System
**Spacing Primitives:** Tailwind units of 3, 4, 6, 8, 12, 16, 24
**Section Padding:** py-16 (mobile) to py-24 (desktop)
**Container:** max-w-7xl with px-4 to px-8 responsive
**Grid System:** 12-column for complex layouts, use gap-6 to gap-8

## Component Library

### Navigation
**Header:** Sticky top navigation with subtle bottom border
- Logo left, navigation center, CTA buttons right
- Navigation items: medium weight, hover underline animation (2px solid, 200ms)
- Primary CTA: Solid button with icon
- Mobile: Hamburger menu with slide-in drawer

### Hero Section (WITH LARGE BACKGROUND IMAGE)
**Layout:** Full-width with overlay, min-h-[600px] to min-h-[700px]
- Dark gradient overlay (from-gray-900/95 to-gray-900/80) over security-themed image
- Content: max-w-4xl centered, z-10
- Headline: Hero typography, text-white with tight leading
- Subheading: lg text, text-gray-200, max-w-2xl
- Trust indicators below hero text: "NIST Compliant • GDPR Ready • ISO 27001 Aligned" in small caps, text-gray-300
- CTA Group: Primary + Secondary buttons with backdrop-blur-md bg-white/10 treatment, gap-4
- Privacy Badge: Small card with lock icon + "100% Client-Side Processing" positioned bottom-right of hero

### Password Analyzer Section
**Card:** Large elevated card (shadow-xl) with p-8 to p-12
- Input field: Extra large with monospace font, p-4, border-2
- Strength meter: Full-width horizontal bar with 5-segment gradient
- Real-time feedback: Stacked list items with checkmark/cross icons
- Compliance indicators: Grid of 4 badge-style cards showing NIST/GDPR/ISO/PCI compliance status
- Color coding: Use semantic states (success/warning/danger) with icons

### K-Anonymity Breach Check Section
**Educational First Layout:**
- Title: "Secure Breach Checking with k-Anonymity"
- Visual Explainer Card: 3-step illustration flow
  - Step 1: "Your Password" → Hash icon
  - Step 2: "Partial Hash (First 5 chars)" → Shield icon with truncated string
  - Step 3: "Compare Locally" → Lock icon
- Privacy Statement Card: Prominent bordered card with shield icon, text-lg emphasis on "Your password never leaves your device"
- Technical Details: Collapsible accordion with deep-dive explanation
- Check Button: Large, prominent with shield icon
- Results Display: Conditional card showing breach count with clear safe/at-risk messaging

### Features Section
**3-Column Grid (lg:grid-cols-3, md:grid-cols-2, gap-8):**
- Icon + Title + Description cards
- Icons: Heroicons outlined style, w-12 h-12
- Cards: p-6, border with subtle hover elevation
- Features to include:
  - Real-Time Analysis
  - Compliance Scoring
  - Privacy-First Architecture
  - Educational Feedback
  - Breach Detection
  - Entropy Calculation
  - Pattern Recognition
  - Best Practice Guidance
  - Export Reports

### Compliance Standards Section
**4-Column Grid with Detailed Cards:**
- NIST SP 800-63B
- GDPR Article 32
- ISO 27001
- PCI DSS Req 8.2
Each card: Logo/icon, standard name, brief description, checkmark indicators for requirements met

### Educational Content Section
**2-Column Layout (lg:grid-cols-2):**
Left: "Why Password Strength Matters" article-style content with headings hierarchy
Right: Statistics cards showing breach data, password patterns, security trends
Use max-w-prose for text column

### Trust & Privacy Section
**Center-Aligned Single Column (max-w-4xl):**
- Heading: "Your Privacy is Our Priority"
- 3 large feature blocks explaining:
  - Client-side processing
  - No data collection
  - Open-source verification
- Visual: Privacy shield graphic or code snippet showing local processing

### FAQ Section
**Single Column with Accordion Components:**
- Questions focused on security, privacy, k-anonymity explanation
- Each item: p-6, border-b, expandable with smooth height animation
- Technical questions get code examples in IBM Plex Mono

### Footer
**Multi-Column Layout:**
- Column 1: Logo + mission statement
- Column 2: Quick Links (Features, Compliance, Privacy)
- Column 3: Resources (Documentation, GitHub, Security Policy)
- Column 4: Contact + Security Email
- Bottom Bar: Copyright, Terms, Privacy Policy, Security Disclosure
- Trust Badges: Small compliance logos in footer bottom

## Images Section

### Hero Background Image
**Placement:** Full-width hero section background
**Description:** Abstract security visualization - digital lock patterns, encrypted data streams, or circuit board aesthetics with blue/cyan highlights. Professional, modern, slightly abstract. Dark-themed to support white text overlay. Should convey "technology" and "security" without being literal.
**Treatment:** Dark gradient overlay (from-gray-900/95 via-gray-900/85 to-gray-900/80) for text readability

### K-Anonymity Visual Diagram
**Placement:** Within k-anonymity explanation section
**Description:** Clean, infographic-style illustration showing the hash partitioning process. Three connected boxes with arrows showing: full password → hashed → partial hash sent → local comparison. Use shield, lock, and check icons. Professional line-art style with accent color highlights.

### Compliance Logos
**Placement:** Compliance standards section and footer
**Description:** Official logos for NIST, GDPR, ISO 27001, PCI DSS standards. Small, monochrome or minimal color versions for professional appearance.

## Visual Hierarchy
1. Hero CTA and headline (primary focus)
2. Password analyzer input (immediate interaction)
3. Breach checker section (new feature highlight)
4. Educational explainers (trust-building)
5. Compliance badges (credibility)
6. Features grid (comprehensive overview)

## Interaction Patterns
- Input focus: Thick border (border-2 to border-3), primary color
- Buttons: Subtle scale on hover (scale-105), no blur effects except hero CTAs
- Cards: Gentle elevation change on hover
- Accordions: Smooth height transition, rotate chevron icon
- Strength meter: Animated width transition (500ms ease-out)
- No loading spinners: Use skeleton states for perceived performance

## Accessibility
- WCAG AAA contrast ratios for all text
- Focus visible states with 3px outline offset
- Keyboard navigation for all interactive elements
- ARIA labels for icons and complex interactions
- Form inputs with associated labels and error messages

This design emphasizes professional trust through restrained aesthetics, clear information hierarchy, and comprehensive educational content while maintaining the privacy-first ethos essential for security applications.