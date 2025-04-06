# 🏆 WJET Challonge Tracker

A sleek Astro-powered dashboard that aggregates and visualizes player statistics from **WJET Challonge tournaments** — including win rates, match history, and ring counts, all with beautiful responsive charts.

[🔗 Live Site](https://challonge-tracker.vercel.app/)

---

## 📊 Features

- ✅ **Pulls real-time data** from the Challonge API
- ✅ Aggregates player stats across all "WJET" tournaments
- ✅ Tracks **wins, losses, win %**, and **rings** (tournament wins)
- ✅ Separates stats for **DB tournaments**
- ✅ Beautiful charts with Chart.js:
  - Pie chart for tournament winners
  - Scatter plot for win % vs rings
  - Bar chart for top win % players
- ✅ Fully responsive with dark mode support

---

## 🧑‍💻 Tech Stack

- **Frontend:** [Astro](https://astro.build) + React components
- **Charts:** [Chart.js](https://www.chartjs.org/) + `chartjs-plugin-datalabels`
- **Data Source:** [Challonge API](https://api.challonge.com/v1)
- **Deployment:** Vercel (Free Tier)

---

## 🗃️ Project Structure

```bash
src/
├── components/
│   └── Charts.jsx          # Dynamic charts using Chart.js
├── layouts/
│   └── Layout.astro        # Page wrapper w/ styles and dark mode
├── pages/
│   ├── index.astro         # Homepage with charts
│   ├── tournaments.astro   # Per-tournament stats
│   └── players.astro       # Aggregated player stats
├── utils/
│   └── players.ts          # Aliases and canonical name formatting
public/
└── assets/                 # Fonts, icons, etc
