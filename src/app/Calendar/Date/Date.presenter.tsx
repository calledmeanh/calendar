import React from "react";
import "./Date.style.scss";
import { DateContainerModule } from "./Date.container";

export const DatePresenter: React.FC<DateContainerModule.Prensenter> = (
  props
) => {
  const { data } = props;
  const dateSplited = data.split(/\s/g);
  const number = dateSplited[0];
  const text = dateSplited[1];
  return (
    <div className="date">
      <span className="date-number">{number}</span>
      <span className="date-text">{text}</span>
    </div>
  );
};
