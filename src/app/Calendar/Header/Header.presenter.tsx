import React from "react";
import "./Header.style.scss";
import { WeekContainer } from "../Week/Week.container";
import { LabelContainer } from "./Label/Label.container";

export const HeaderPresenter: React.FC = (props) => {
  return (
    <div className="header">
      <LabelContainer />
      <WeekContainer />
    </div>
  );
};
