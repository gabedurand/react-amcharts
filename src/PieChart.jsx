import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import React, { useLayoutEffect } from "react";

export default function PieChart(props) {
  const { data } = props;

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv2");

    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(am5percent.PieChart.new(root, {}));

    // Create series
    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: props.valueField,
        categoryField: props.categoryField,
      })
    );
    series.slices.template.set("fill", am5.color(props.fill));
    series.slices.template.set("strokeWidth", 4);
    series.slices.template.set("stroke", am5.color(props.stroke));

    series.data.setAll(data);

    // Add legend
    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        y: am5.percent(4),
        layout: root.horizontalLayout,
      })
    );

    legend.data.setAll(series.dataItems);

    root.current = root;

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv2" style={{ width: "100%", height: props.height }}></div>
  );
}
