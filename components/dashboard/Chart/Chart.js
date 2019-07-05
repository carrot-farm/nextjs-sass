import {} from "@material-ui/core";
import {} from "@material-ui/icons";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"));
import Title from "../Title";

const options = {
  chart: {
    id: "line-chart"
  },
  stroke: {
    curve: "smooth"
  },
  xaxis: {
    categories: [
      "00:00",
      "03:00",
      "06:00",
      "09:00",
      "12:00",
      "15:00",
      "18:00",
      "21:00",
      "24:00"
    ]
  },
  yaxis: {
    title: { text: "판매액(원)" }
  }
};

const series = [
  {
    name: "판매액(원)",
    data: [0, 300, 600, 800, 1500, 2000, 2400, 4500]
  }
];

// ===== 상단 바
const Chart = () => {
  return (
    <>
      <Title>Today</Title>
      <ApexChart type="line" height="160" options={options} series={series} />
    </>
  );
};

export default Chart;
