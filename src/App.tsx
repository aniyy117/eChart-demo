import React, { useState } from "react";
import "./App.css";
import { BarChart } from "./app/Components/BarChart";
import { Scatterchart } from "./app/Components/Scatterchart";

function App() {
  const [theme, setTheme] = useState<boolean>(false);
  let data = require("./app/utils/Wine-Data.json");

  const horizontalBar = data.map((data: any) => data["Alcohol"]);
  const verticalBar = data.map((data: any) => data["Malic Acid"]);

  const scatterChartData = data.map((data: any) => {
    return [data["Color intensity"], data["Hue"]];
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
        <BarChart
          horizontalBar={horizontalBar}
          verticalBar={verticalBar}
          theme={theme}
        />
        <Scatterchart scatterChartData={scatterChartData} theme={theme} />
      </div>
    </div>
  );
}

export default App;
