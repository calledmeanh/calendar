import React, { Component } from "react";
import TimeColumnPresenter from "./TimeColumn.presenter";

export declare module TimeColumnContainerModule {
  export type Props = {
    duration: number;
    displayDuration: number;
    workingTime: {
      start: number;
      end: number;
    };
    dayTime: {
      start: number;
      end: number;
    };
  };
  export type State = {};
  export type Presenter = {
    duration: number;
    displayDuration: number;
    workingTime: {
      start: number;
      end: number;
    };
    dayTime: {
      start: number;
      end: number;
    };
  };
}

class TimeColumnContainer extends Component<TimeColumnContainerModule.Props, TimeColumnContainerModule.State> {
  render() {
    return <TimeColumnPresenter {...this.props} />;
  }
}

export default TimeColumnContainer;
