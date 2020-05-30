import React from "react";
import "./Calendar.style.scss";
import Header from "./Header";
import Content from "./Content";

const CalendarPresenter: React.FC = (props) => {
  return (
    <div className="calendar">
      <Header />
      <Content />
    </div>
  );
};
export default CalendarPresenter;
