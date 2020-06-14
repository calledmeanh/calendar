import React from "react";
import "./Week.style.scss";
import { WeekContainerModule } from "./Week.container";
import Day from "../Day";
import { CLASSNAMES } from "../../../constants";

const WeekPresenter: React.FC<Pick<WeekContainerModule.Props, "data">> = (props) => {
  return (
    <div className={CLASSNAMES.WEEK}>
      {props.data.map((w, i) => {
        return <Day key={i} data={w} />;
      })}
    </div>
  );
};
export default WeekPresenter;
