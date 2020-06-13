import React, { Component } from "react";
import DayCellPresenter from "./DayCell.presenter";

export declare module DayCellContainerModule {
  export type Props = { data: string; isWorkingTime: boolean; timeJumpIndex: number };
  export type State = {};
}

class DayCellContainer extends Component<DayCellContainerModule.Props, DayCellContainerModule.State> {
  render() {
    return <DayCellPresenter {...this.props} />;
  }
}

export default DayCellContainer;
