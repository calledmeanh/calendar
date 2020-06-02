import React, { Component } from "react";
import TimeColumnPresenter from "./TimeColumn.presenter";

export declare module TimeColumnContainerModule {
  export type Props = {};
  export type State = {};
  export type Presenter = {};
}

class TimeColumnContainer extends Component<
  TimeColumnContainerModule.Props,
  TimeColumnContainerModule.State
> {
  render() {
    return <TimeColumnPresenter />;
  }
}

export default TimeColumnContainer;
