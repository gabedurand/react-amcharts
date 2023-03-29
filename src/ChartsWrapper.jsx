// ** this will be a component wrapper for all the charts ** //
import Chart from "./Chart";
import PieChart from "./PieChart";

export default function ChartsWrapper({ type }) {
  let data = [
    {
      category: "Research",
      value1: 1000,
      value2: 588,
    },
    {
      category: "Marketing",
      value1: 1200,
      value2: 1800,
    },
    {
      category: "Sales",
      value1: 850,
      value2: 1230,
    },
  ];

  return (
    <>
      <PieChart
        data={data}
        valueField="value1"
        categoryField="category"
        stroke="#FFF"
        fill="#FF5733"
        height="500px"
      />
      <Chart
        data={data}
        stroke="#FF573380"
        fill="#FF5733"
        xAxisField="category"
        seriesName="Data"
      />
    </>
  );
}
