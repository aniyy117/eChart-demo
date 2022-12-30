import React, { useState } from "react";
import "./App.css";
import { BarChart } from "./app/Components/BarChart";
import { Scatterchart } from "./app/Components/Scatterchart";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  let data = require("./app/utils/Wine-Data.json");

  const barChatData = data.map((data: any) => ({
    Alcohol: data["Alcohol"],
    "Malic Acid": data["Malic Acid"],
  }));

  const scatterChartData = data.map((data: any) => {
    return [data["Color intensity"], data["Hue"]];
  });

  const avgData = data.reduce((a: any, b: any) => {
    if (a[b["Alcohol"]]) {
      a[b["Alcohol"]].push(b["Malic Acid"]);
    } else {
      a[b["Alcohol"]] = [b["Malic Acid"]];
    }
    return a;
  }, {});

  const getAverage = (arr: any) => {
    const sum = arr.reduce((a: any, b: any) => a + b, 0);
    const avg = sum / arr.length || 0;
    return avg;
  };

  Object.keys(avgData).forEach((key) => {
    avgData[key] = getAverage(avgData[key]);
  });

  return (
    <div className="container">
      <button
        className={theme ? "button_dark" : "button"}
        onClick={() => setTheme(!theme)}
      >
        {theme ? "🌙" : "☀️"}
      </button>
      <div className={theme ? "app_dark" : "app"}>
        <BarChart data={avgData} theme={theme} />
        <Scatterchart scatterChartData={scatterChartData} theme={theme} />
      </div>
    </div>
  );
}

export default App;
