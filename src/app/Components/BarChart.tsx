import "echarts-liquidfill";
import { ReactECharts, ReactEChartsProps } from "../ui-components/ReactECharts";

export interface BarChartProps {
  data: any;
  theme: boolean;
}

export function BarChart({ data, theme }: BarChartProps): JSX.Element {
  const option: ReactEChartsProps["option"] = {
    title: {
      left: "center",
      text: "Bar Chart",
    },
    tooltip: {
      // trigger: "axis",
      // axisPointer: {
      //   type: "shadow",
      // },
    },
    legend: {
      bottom: 40,
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
    dataset: {
      source: data,
    },
    series: [
      {
        name: "Heavy",
        type: "bar",
        stack: "1",
        markLine: {
          data: [
            {
              name: "Average of Malic Acid",
              type: "average",
            },
          ],
          label: {
            formatter: "{b}: {c}",
            position: "middle",
            color: theme ? "white" : "black",
          },
          lineStyle: {
            color: "red",
          },
        },
      },
      {
        name: "Medium",
        type: "bar",
        stack: "1",
        markLine: {
          data: [
            {
              name: "Average of Malic Acid",
              type: "average",
            },
          ],
          label: {
            formatter: "{b}: {c}",
            position: "middle",
            color: theme ? "white" : "black",
          },
          lineStyle: {
            color: "red",
          },
        },
      },
      {
        name: "Light",
        type: "bar",
        stack: "1",
        markLine: {
          data: [
            {
              name: "Average of Malic Acid",
              type: "average",
            },
          ],
          label: {
            formatter: "{b}: {c}",
            position: "middle",
            color: theme ? "white" : "black",
          },
          lineStyle: {
            color: "red",
          },
        },
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
