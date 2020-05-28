import React from "react";
import "./TimeEachDate.style.scss";
import { TimeEachDateContainerModule } from "./TimeEachDate.container";
import { TimeCellContainer } from "../TimeCell/TimeCell.container";

export const TimeEachDatePresenter: React.FC<TimeEachDateContainerModule.Presenter> = (props) => {
  return (
    <div className="time-each-date">
      {props.data.map((t, i) => {
        return <TimeCellContainer key={i} data={t} options={{ showContent: false }} />;
      })}
    </div>
  );
};
