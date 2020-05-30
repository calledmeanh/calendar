import React from "react";
import CalendarPresenter from "./Calendar.presenter";
import { TCalendarProps, TCalendar } from "../../models";

export declare module CalendarContainerModule {
  export type Props = TCalendarProps;
  export type State = {};
  export type Presenter = TCalendar;
}

class CalendarContainer extends React.Component<
  CalendarContainerModule.Props,
  CalendarContainerModule.State
> {
  render() {
    return (
      <CalendarPresenter
        duration={this.props.duration}
        displayDuration={this.props.displayDuration || this.props.duration}
        workingTime={this.props.workingTime}
        dayTime={this.props.dayTime || this.props.workingTime}
      />
    );
  }
}

export default CalendarContainer;
