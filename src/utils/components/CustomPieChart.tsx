import { useLayoutEffect, useRef, useId } from "react";
import { Box } from "@mui/material";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface CustomPieChartProps {
  data: {
    category: string;
    value: number;
  }[];
}

export default function CustomPieChart({ data }: CustomPieChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    let root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
      })
    );

    series.data.setAll(data);

    chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
        marginTop: 15,
        marginBottom: 15,
      })
    ).data.setAll(series.dataItems);

    return () => {
      root.dispose();
    };
  }, [data]);

  return <Box ref={chartRef} id={`piediv-${uniqueId}`} sx={{ width: "100%", height: "400px" }} />;
}
