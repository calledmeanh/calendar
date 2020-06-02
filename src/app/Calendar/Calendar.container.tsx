import React from "react";
import CalendarPresenter from "./Calendar.presenter";
import { TCalendarProps, TCalendarContext } from "../../models";
import { DEFAULT_TIME_FORMAT } from "../../constants";

export declare module CalendarContainerModule {
  export type Props = TCalendarProps;
  export type State = {};
  export type Presenter = TCalendarContext;
}

class CalendarContainer extends React.Component<
  CalendarContainerModule.Props,
  CalendarContainerModule.State
> {
  render() {
    const calendarDatas: TCalendarContext = {
      duration: this.props.duration,
      displayDuration: this.props.displayDuration || this.props.duration,
      workingTime: this.props.workingTime,
      dayTime: this.props.dayTime || this.props.workingTime,
      timeFormat: this.props.timeFormat || DEFAULT_TIME_FORMAT,
    };

    return <CalendarPresenter {...calendarDatas} />;
  }
}

export default CalendarContainer;
