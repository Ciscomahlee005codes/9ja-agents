// src/components/Barchart.jsx
import React from "react";
import Chart from "react-apexcharts";

const colorStops = [
  {
    offset: 0,
    opacity: 1,
    color: "var(--color-primary)",
  },
  {
    offset: 40,
    opacity: 0.5,
    color: "var(--color-primary)",
  },
  {
    offset: 100,
    opacity: 0,
    color: "transparent",
  },
];

const labelStyle = {
  colors: "var(--color-text)",
  fontSize: "14px",
};

const chartOptions = {
  chart: {
    id: "revenue",
    type: "area",
    sparkline: { enabled: false },
    toolbar: { show: false },
  },
  grid: { show: false },
  dataLabels: { enabled: true },
  tooltip: { theme: "dark" },
  colors: ["var(--color-primary)"],
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      colorStops: colorStops,
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels: { style: labelStyle },
  },
  yaxis: {
    labels: {
      formatter: value => `$${value}`,
      style: labelStyle,
    },
  },
};

const chartSeries = [{
  name: 'Profits',
  data: [200, 1000, 2500, 15000, 30000, 4050, 4000, 20000, 30000],
}];

const Barchart = () => {
  return (
    <div className="revenue-chart" style={{ maxWidth: "100%", marginTop: "1rem" }}>
      <Chart options={chartOptions} series={chartSeries} type="area" height={200} />
    </div>
  );
};

export default Barchart;
