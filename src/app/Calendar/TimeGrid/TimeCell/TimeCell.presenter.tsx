import React from "react";
import "./TimeCell.style.scss";
import { TimeCellContainerModule } from "./TimeCell.container";

export const TimeCellPresenter: React.FC<TimeCellContainerModule.Presenter> = (
  props
) => {
  return (
    <div className={`time-cell ${props.className ? props.className : ""}`}>
      {props.options.showContent && props.data}
    </div>
  );
};
