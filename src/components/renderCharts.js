import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

export function renderCharts(data) {
  const topRings = data.slice(0, 10).sort((a, b) => b.rings - a.rings);
  const topWinPct = data
    .filter((p) => p.matches >= 5)
    .sort((a, b) => b.winPct - a.winPct)
    .slice(0, 10);
  const winPctMax = Math.min(
    100,
    Math.max(...topWinPct.map((p) => p.winPct)) + 5,
  );

  const scatterData = data
    .filter((p) => p.matches >= 5)
    .map((p) => ({
      x: Number(p.winPct.toFixed(1)),
      y: p.rings,
      label: p.name,
    }));

  const xValues = scatterData.map((d) => d.x);
  const yValues = scatterData.map((d) => d.y);

  const xMin = Math.max(0, Math.min(...xValues) - 5);
  const xMax = Math.min(100, Math.max(...xValues) + 5);
  const yMin = Math.max(0, Math.min(...yValues) - 1);
  const yMax = Math.max(...yValues) + 1;

  const filtered = data
    .filter((p) => p.rings > 0)
    .sort((a, b) => b.rings - a.rings);

  const pieColors = [
    "#3b82f6",
    "#f59e0b",
    "#10b981",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#22d3ee",
    "#f43f5e",
    "#6366f1",
    "#14b8a6",
    "#eab308",
    "#0ea5e9",
    "#7c3aed",
    "#84cc16",
  ];

  // PIE CHART: Tournament Rings
  new Chart(document.getElementById("ringsChart"), {
    type: "pie",
    data: {
      labels: filtered.map((p) => p.name),
      datasets: [
        {
          label: "Tournament Rings",
          data: filtered.map((p) => p.rings),
          backgroundColor: pieColors.slice(0, filtered.length), // 💡 Make sure color count matches data count
        },
      ],
    },
    options: {
      plugins: {
        datalabels: {
          formatter: (value, context) => {
            const name = context.chart.data.labels[context.dataIndex];
            return `${name} (${value})`;
          },
          color: "#fff",
          font: {
            weight: "bold",
          },
        },
      },
    },
  });

  new Chart(document.getElementById("winPctChart"), {
    type: "bar",
    data: {
      labels: topWinPct.map((p) => p.name),
      datasets: [
        {
          label: "Win % (min 5 matches)",
          data: topWinPct.map((p) => Number(p.winPct.toFixed(1))),
          backgroundColor: "rgba(75, 192, 192, 0.7)",
        },
      ],
    },
    options: {
      scales: {
        y: {
          max: winPctMax,
          beginAtZero: true,
        },
      },
    },
  });

  // SCATTER CHART: Win % vs Rings
  new Chart(document.getElementById("scatterChart"), {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Players",
          data: scatterData,
          backgroundColor: "rgba(255, 99, 132, 0.7)",
        },
      ],
    },
    options: {
      plugins: {
        datalabels: {
          align: "top",
          formatter: (value) => value.label,
          font: {
            size: 10,
          },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const point = ctx.raw;
              return `${point.label}: ${point.x}% win, ${point.y} rings`;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Win %",
          },
          min: xMin,
          max: xMax,
        },
        y: {
          title: {
            display: true,
            text: "Rings",
          },
          min: yMin,
          max: yMax,
        },
      },
    },
  });
}
