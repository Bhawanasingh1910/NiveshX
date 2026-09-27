import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },

  scales: {
    x: {
      title: {
        display: true,
        text: "Stocks",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Stock Price",
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
}

export default VerticalGraph;