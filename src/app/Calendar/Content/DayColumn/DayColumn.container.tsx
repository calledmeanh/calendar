import React, { Component } from "react";
import DayColumnPresenter from "./DayColumn.presenter";
import { TCalendar } from "../../../../models/calendar";

export declare module DayColumnContainerModule {
  export type Props = TCalendar;
  export type State = {};
  export type Presenter = TCalendar;
}

class DayColumnContainer extends Component<DayColumnContainerModule.Props, DayColumnContainerModule.State> {
  render() {
    return <DayColumnPresenter {...this.props} />;
  }
}

export default DayColumnContainer;
