import { useLayoutEffect, useRef, useId } from "react";
import { Box } from "@mui/material";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

interface CustomBarCharsData {
  data: {
    category: string;
    value: number;
  }[];
}

export default function CustomBarChars({ data }: CustomBarCharsData) {
  const chartRef = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    const root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Eixo Y
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Eixo X
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    // Série única de barras
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Valor",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        categoryXField: "category",
      })
    );
    series.data.setAll(data);

    // Legend opcional
    const legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    return () => {
      root.dispose();
    };
  }, [data]);

  return <Box ref={chartRef} id={`chart-${uniqueId}`} sx={{ width: "100%", height: "500px" }} />;
}
