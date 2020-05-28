import React from "react";
import "./TimeGrid.style.scss";
import { TimeGridContainerModule } from "./TimeGrid.container";
import { TimeGroupContainer } from "./TimeGroup/TimeGroup.container";
import { TimeEachDateContainer } from "./TimeEachDate/TimeEachDate.container";

export const TimeGridPresenter: React.FC<TimeGridContainerModule.Presenter> = (props) => {
  return (
    <div className="time-grid">
      <TimeGroupContainer />
      <TimeEachDateContainer />
      <TimeEachDateContainer />
      <TimeEachDateContainer />
      <TimeEachDateContainer />
      <TimeEachDateContainer />
      <TimeEachDateContainer />
      <TimeEachDateContainer />
    </div>
  );
};
