import React from "react";
import "./DayCell.style.scss";
import { DayCellContainerModule } from "./DayCell.container";

const DayCellPresenter: React.FC<DayCellContainerModule.Presenter> = (props) => {
  return <div className="day-cell">{/* {props.data} */}</div>;
};
export default DayCellPresenter;
