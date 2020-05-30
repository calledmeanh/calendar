import React from "react";
import "./Calendar.style.scss";
import Header from "./Header";

const CalendarPresenter: React.FC = (props) => {
  return (
    <div className="calendar">
      <Header />
    </div>
  );
};
export default CalendarPresenter;
