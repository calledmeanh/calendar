import React from "react";
import "./TimeGroup.style.scss";
import { TimeGroupContainerModule } from "./TimeGroup.container";
import { TimeCellContainer } from "../TimeCell/TimeCell.container";
import clsx from "clsx";
export const TimeGroupPresenter: React.FC<TimeGroupContainerModule.Presenter> = (props) => {
  return (
    <div className="time-group">
      {props.data.map((t, i) => {
        const timeCellClassName = clsx({
          "border-none": true,
          "background-transparent": true,
        });
        return (
          <TimeCellContainer key={i} data={t} options={{ showContent: i % 2 === 0 }} className={timeCellClassName} />
        );
      })}
    </div>
  );
};
