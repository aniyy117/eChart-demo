import { ReactECharts, ReactEChartsProps } from "../ui-components/ReactECharts";

export interface ScatterchartProps {
  scatterChartData: number[];
  theme: boolean;
}

export function Scatterchart({
  scatterChartData,
  theme,
}: ScatterchartProps): JSX.Element {
  const option: ReactEChartsProps["option"] = {
    title: {
      left: "center",
      text: "Scatter Chart",
    },
    visualMap: {
      min: Math.max(...scatterChartData.flat()),
      max: Math.min(...scatterChartData.flat()),
      dimension: 1,
      orient: "horizontal",
      top: "bottom",
      left: "center",
      text: ["HIGH", "LOW"],
      calculable: true,
      inRange: {
        color: ["#f2c31a", "#24b7f2"],
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    grid: {
      left: "15%",
      right: "15%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: {
      name: "Color Intensity",
      nameLocation: "middle",
      nameGap: 30,
      // ...
    },
    yAxis: {
      name: "Hue",
      nameLocation: "middle",
      nameGap: 30,
      // ...
    },
    series: [
      {
        symbolSize: 20,
        data: scatterChartData,
        type: "scatter",
      },
    ],
  };
  return (
    <ReactECharts
      option={option}
      style={{ height: "calc(100vh - 20rem)", width: "100%" }}
      theme={theme ? "dark" : "light"}
    />
  );
}
