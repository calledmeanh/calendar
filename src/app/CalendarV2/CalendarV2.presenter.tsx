import React from "react";
import "./CalendarV2.style.scss";

import { TCalendarProps, TCalendarContext } from "../../models";
import { CalendarContext, CLASSNAMES, DEFAULT_TIME_FORMAT, SECONDS_PER_HOUR } from "../../constants";
import TimeColumn from "./components/TimeColumn";
import ContentView from "./components/ContentView";

export declare module CalendarV2Module {
  export type Props = TCalendarProps;
}

const CalendarV2Presenter: React.FC<CalendarV2Module.Props> = (props) => {
  const calendarDatas: TCalendarContext = {
    duration: props.duration,
    displayDuration: props.displayDuration || props.duration,
    workingTime: props.workingTime,
    dayTime: props.dayTime || props.workingTime,
    timeFormat: props.timeFormat || DEFAULT_TIME_FORMAT,
    events: props.events,
    label: props.label,
    groupTime: props.groupTime || SECONDS_PER_HOUR,
    nowIndicator: Boolean(props.nowIndicator),
  };
  return (
    <div className={CLASSNAMES.CALENDAR}>
      <CalendarContext.Provider value={{ ...calendarDatas }}>
        <TimeColumn />
        <ContentView />
      </CalendarContext.Provider>
    </div>
  );
};

export default CalendarV2Presenter;
