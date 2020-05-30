import React, { useEffect } from "react";
import "./Calendar.style.scss";
import Header from "./Header";
import Content from "./Content";

const CalendarPresenter: React.FC = (props) => {
  useEffect(() => {
    /* calculate first column */
    let width = 0;
    const labelEl = document.querySelector(".header-label") as HTMLElement;
    const labelPos = labelEl.getBoundingClientRect();
    const timeColumnEl = document.querySelector(".time-column") as HTMLElement;
    const timeColumnPos = timeColumnEl.getBoundingClientRect();
    if (labelPos.width < timeColumnPos.width) {
      width = timeColumnPos.width;
    } else {
      width = labelPos.width;
    }

    labelEl.style.width = `${width}px`;
    timeColumnEl.style.width = `${width}px`;

    /* set Height for content el */
    const parentEl = document.querySelector(".calendar") as HTMLElement;
    const parentBox = parentEl.getBoundingClientRect();
    const headerEl = parentEl.firstChild as HTMLElement;
    const headerBox = headerEl.getBoundingClientRect();
    const contentMaxHeight = parentBox.height - headerBox.height;

    const contenEl = document.querySelector(".content") as HTMLElement;
    contenEl.style.maxHeight = `${contentMaxHeight}px`;
  }, []);
  return (
    <div className="calendar">
      <Header />
      <Content />
    </div>
  );
};
export default CalendarPresenter;
