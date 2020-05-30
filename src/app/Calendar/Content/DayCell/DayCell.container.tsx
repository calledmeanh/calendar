import React, { Component } from "react";
import DayCellPresenter from "./DayCell.presenter";

export declare module DayCellContainerModule {
  export type Props = {};
  export type State = {};
  export type Presenter = {};
}

class DayCellContainer extends Component<DayCellContainerModule.Props, DayCellContainerModule.State> {
  render() {
    return <DayCellPresenter />;
  }
}

export default DayCellContainer;
