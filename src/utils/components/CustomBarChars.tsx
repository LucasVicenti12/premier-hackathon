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

    // Eixo Y agora será de categorias (os nomes)
    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {
          // A propriedade `inversed: true` é opcional, mas pode ser útil para ordenar os dados
          // de baixo para cima, seguindo a ordem do array.
          inversed: true,
        }),
        categoryField: "category",
      })
    );
    yAxis.data.setAll(data);
    
    // Eixo X agora será de valores (os números)
    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

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
