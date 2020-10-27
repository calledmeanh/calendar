import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import Calendar from "./app";
import { CONFIG } from "./constants";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: "100vw", height: "100vh", padding: "2.4rem" }}>
      <Calendar
        duration={CONFIG.DEFAULT_DURATION}
        displayDuration={CONFIG.DEFAULT_DURATION}
        workingTime={CONFIG.DEFAULT_WORKING_TIME}
        dayTime={CONFIG.DEFAULT_DAY_TIME}
        timeFormat={CONFIG.DEFAULT_TIME_FORMAT}
        groupTime={CONFIG.DEFAULT_GROUP_TIME}
        nowIndicator={true}
      />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
