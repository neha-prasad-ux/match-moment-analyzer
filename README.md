# Match Moment Analyzer

AI-powered biomechanical analysis of MS Dhoni's match-winning innings in the 2011 ICC Cricket World Cup Final.

Built for **SportAI** CEO presentation.

**Live Demo:** [match-analyzer.vercel.app](https://match-analyzer.vercel.app)

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **The Situation** | Match context with embedded video of Dhoni's winning six |
| 2 | **The Gamble** | Batting order promotion — wagon wheel visualization |
| 3 | **The Posture** | Biomechanical adjustments across overs despite back pain |
| 4 | **AI Insights** | Frame-by-frame analysis of the 0.4 seconds before contact |
| 5 | **The Choice** | Shot selection and field placement strategy |
| 6 | **Head Stability** | Comparison of head movement — Average Batsman vs Dhoni (0mm drift) |
| 7 | **The Verdict** | Elite performance rating with 96% SportAI confidence |

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** with custom dark theme
- **TypeScript** / React 19
- **Deployed on Vercel**

## Features

- Scroll-triggered reveal animations (Intersection Observer)
- Sticky navigation bar with smooth-scroll anchor links
- Scroll progress indicator
- YouTube video embed
- Responsive 3-column layout with center-dominant grid
- Dark theme (`#0C0C0C`) with teal accents (`#00C896`)

## Getting Started

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  src/app/
    page.tsx              # Main page
    globals.css           # Theme, animations, custom CSS
    layout.tsx            # Root layout with fonts
    components/
      Header.tsx          # Sticky header + nav bar
      Section.tsx         # Reusable section wrapper with scroll reveal
      ScrollProgress.tsx  # Scroll progress bar
      TheSituation.tsx    # Section 1 — YouTube embed
      TheGamble.tsx       # Section 2 — Wagon wheel
      ThePosture.tsx      # Section 3 — Posture visualization
      AIInsights.tsx      # Section 4 — Batting analysis
      TheChoice.tsx       # Section 5 — Field diagram
      HeadStability.tsx   # Section 6 — Head stability comparison
      Verdict.tsx         # Section 7 — Elite rating gauge
      useScrollReveal.ts  # Intersection Observer hook
  public/                 # Section images
legacy/
  match-moment-analyzer.html  # Original HTML prototype
```
