import { useEffect } from "react";
import Chart from "chart.js/auto";
import { renderCharts } from "./renderCharts";

export default function Charts({ data }) {
  useEffect(() => {
    renderCharts(data);
  }, [data]);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <canvas
          id="ringsChart"
          style={{
            maxWidth: "400px",
            width: "100%",
            height: "auto",
          }}
        ></canvas>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <canvas
          id="scatterChart"
          style={{ width: "100%", height: "auto", aspectRatio: "16 / 9" }}
        ></canvas>
      </div>
      <div>
        <canvas
          id="winPctChart"
          style={{ width: "100%", height: "auto", aspectRatio: "16 / 9" }}
        ></canvas>
      </div>
    </div>
  );
}
