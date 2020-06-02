import React, { Component } from "react";
import TimeCellPresenter from "./TimeCell.presenter";

export declare module TimeCellContainerModule {
  export type Props = {
    data: number;
    isWorkingTime: boolean;
  };
  export type State = {};
  export type Presenter = {
    data: number;
    isWorkingTime: boolean;
  };
}

class TimeCellContainer extends Component<
  TimeCellContainerModule.Props,
  TimeCellContainerModule.State
> {
  render() {
    return <TimeCellPresenter {...this.props} />;
  }
}

export default TimeCellContainer;