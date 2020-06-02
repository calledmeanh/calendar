import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";
import Calendar from "./app/Calendar";
import { DEFAULT_DURATION, DEFAULT_WORKING_TIME } from "./constants";
import { EVENTS } from "./mocks";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: "100vw", height: "100vh", padding: "4.8rem" }}>
      <Calendar
        duration={DEFAULT_DURATION}
        workingTime={DEFAULT_WORKING_TIME}

        // for test
        // timeFormat={12}
        // displayDuration={1800}
        dayTime={{start: 25200, end: 64800}}
        events={EVENTS}
      />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
