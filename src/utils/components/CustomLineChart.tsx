import { useLayoutEffect, useRef, useId } from "react";
import { Box } from "@mui/material";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface CustomLineChartProps {
  data: {
    category: string;
    value: number;
  }[];
}

export default function CustomLineChart({ data }: CustomLineChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    let root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Value",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
      })
    );

    series.strokes.template.setAll({ strokeWidth: 2 });
    series.data.setAll(data);

    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, [data]);

  return <Box ref={chartRef} id={`linediv-${uniqueId}`} sx={{ width: "100%", height: "400px" }} />;
}
