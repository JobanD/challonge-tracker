import { useEffect } from "react";
import Chart from "chart.js/auto";
import { renderCharts } from "./renderCharts";

export default function Charts({ data }) {
  useEffect(() => {
    renderCharts(data);
  }, [data]);

  return (
    <div>
      <canvas
        id="ringsChart"
        width="400"
        height="200"
        style={{ marginBottom: "2rem" }}
      ></canvas>
      <canvas
        id="winPctChart"
        width="400"
        height="200"
        style={{ marginBottom: "2rem" }}
      ></canvas>
      <canvas
        id="scatterChart"
        width="400"
        height="200"
        style={{ marginBottom: "2rem" }}
      ></canvas>
    </div>
  );
}
