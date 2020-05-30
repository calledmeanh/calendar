import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { CalendarContainer } from "./app/Calendar/Calendar.container";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <div style={{width: "100vw", height: "100vh", padding: "4.8rem"}}>
      <CalendarContainer />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
