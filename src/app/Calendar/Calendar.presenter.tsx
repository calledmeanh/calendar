import React from "react";
import "./Calendar.style.scss";
import { HeaderContainer } from "./Header/Header.container";

export const CalendarPresenter: React.FC = (props) => {
  return (
    <div className="calendar">
      <HeaderContainer />
    </div>
  );
};
