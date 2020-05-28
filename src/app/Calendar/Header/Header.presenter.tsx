import React from "react";
import "./Header.style.scss";
import { WeekContainer } from "../Week/Week.container";

export const HeaderPresenter: React.FC = (props) => {
  return (
    <div className="header">
      <WeekContainer />
    </div>
  );
};
