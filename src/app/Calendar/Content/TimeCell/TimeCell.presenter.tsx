import React from "react";
import "./TimeCell.style.scss";
import { TimeCellContainerModule } from "./TimeCell.container";

const TimeCellPresenter: React.FC<TimeCellContainerModule.Presenter> = (
  props
) => {
  return <div className="time-cell">{props.data}</div>;
};
export default TimeCellPresenter;
