// ** this will be a component wrapper for all the charts ** //
import Chart from "./Chart";

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

  return <Chart data={data} />;
}
