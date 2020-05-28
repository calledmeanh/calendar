import React from "react";
import "./Week.style.scss";
import { WeekContainerModule } from "./Week.container";
import { DateContainer } from "../Date/Date.container";
export const WeekPresenter: React.FC<WeekContainerModule.Presenter> = (
  props
) => {
  return (
    <div className="week">
      {props.data.map((w, i) => {
        return <DateContainer key={i} data={w} />;
      })}
    </div>
  );
};
