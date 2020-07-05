import React, { useEffect } from "react";
import "./Calendar.style.scss";
import Header from "./Header";
import Content from "./Content";
import { CalendarContext, CLASSNAMES } from "../../constants";
import { CalendarContainerModule } from "./Calendar.container";
import { addFirstChar } from "../../utils";

const CalendarPresenter: React.FC<CalendarContainerModule.Presenter> = (props) => {
  useEffect(() => {
    /* calculate first column */
    let width = 0;
    const labelEl = document.querySelector(addFirstChar(CLASSNAMES.HEADER_LABEL, ".")) as HTMLElement;
    const labelPos = labelEl.getBoundingClientRect();
    const timeColumnEl = document.querySelector(addFirstChar(CLASSNAMES.TIME_COLUMN, ".")) as HTMLElement;
    const timeColumnPos = timeColumnEl.getBoundingClientRect();

    width = labelPos.width < timeColumnPos.width ? timeColumnPos.width : labelPos.width;

    labelEl.style.width = width + "px";
    timeColumnEl.style.width = width + "px";

    /* set height for content el */
    const parentEl = document.querySelector(addFirstChar(CLASSNAMES.CALENDAR, ".")) as HTMLElement;
    const parentBox = parentEl.getBoundingClientRect();
    const headerEl = parentEl.firstChild as HTMLElement;
    const headerBox = headerEl.getBoundingClientRect();
    const contentMaxHeight = parentBox.height - headerBox.height;

    const contenEl = document.querySelector(addFirstChar(CLASSNAMES.CONTENT, ".")) as HTMLElement;
    contenEl.style.maxHeight = contentMaxHeight + "px";
  }, []);
  return (
    <div className={CLASSNAMES.CALENDAR}>
      <CalendarContext.Provider value={{ ...props }}>
        <Header />
        <Content />
      </CalendarContext.Provider>
    </div>
  );
};
export default CalendarPresenter;
