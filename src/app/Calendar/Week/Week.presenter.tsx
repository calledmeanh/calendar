import React from "react";
import "./Week.style.scss";
import { WeekContainerModule } from "./Week.container";
import Day from "../Day";

const WeekPresenter: React.FC<WeekContainerModule.Presenter> = (props) => {
  return (
    <div className="week">
      {props.data.map((w, i) => {
        return <Day key={i} data={w} />;
      })}
    </div>
  );
};
export default WeekPresenter;
