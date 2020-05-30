import React from "react";
import "./Day.style.scss";
import { DayContainerModule } from "./Day.container";

const DayPresenter: React.FC<DayContainerModule.Prensenter> = (props) => {
  const { data } = props;
  const daySplited = data.split(/\s/g);
  const number = daySplited[0];
  const text = daySplited[1];
  return (
    <div className="day">
      <span className="day-number">{number}</span>
      <span className="day-text">{text}</span>
    </div>
  );
};

export default DayPresenter;
