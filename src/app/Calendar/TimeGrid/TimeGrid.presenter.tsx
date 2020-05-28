import React from "react";
import "./TimeGrid.style.scss";
import { TimeGridContainerModule } from "./TimeGrid.container";

export const TimeGridPresenter: React.FC<TimeGridContainerModule.Presenter> = (props) => {
  return <div className="time-grid"></div>;
};
