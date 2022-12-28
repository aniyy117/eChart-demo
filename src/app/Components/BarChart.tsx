import "echarts-liquidfill";
import { ReactECharts, ReactEChartsProps } from "../ui-components/ReactECharts";

export interface BarChartProps {
  horizontalBar: number[];
  verticalBar: number[];
  theme: boolean;
}

export function BarChart({
  horizontalBar,
  verticalBar,
  theme,
}: BarChartProps): JSX.Element {
  const option: ReactEChartsProps["option"] = {
    title: {
      left: "center",
      text: "Bar Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
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
      left: "10%",
      right: "10%",
      bottom: "20%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "Alcohol",
        nameLocation: "middle",
        nameGap: 30,
        data: horizontalBar,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Malic Acid",
        nameLocation: "middle",
        nameGap: 40,
      },
    ],
    dataZoom: [
      {
        show: true,
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: verticalBar,
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
