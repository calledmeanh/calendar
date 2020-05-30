import React, { Component } from "react";
import TimeColumnPresenter from "./TimeColumn.presenter";
import { TCalendar } from "../../../../models";

export declare module TimeColumnContainerModule {
  export type Props = TCalendar;
  export type State = {};
  export type Presenter = TCalendar;
}

class TimeColumnContainer extends Component<
  TimeColumnContainerModule.Props,
  TimeColumnContainerModule.State
> {
  render() {
    return <TimeColumnPresenter {...this.props} />;
  }
}

export default TimeColumnContainer;
