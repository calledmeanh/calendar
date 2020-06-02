import React, { Component } from "react";
import DayColumnPresenter from "./DayColumn.presenter";

export declare module DayColumnContainerModule {
  export type Props = {};
  export type State = {};
  export type Presenter = {};
}

class DayColumnContainer extends Component<
  DayColumnContainerModule.Props,
  DayColumnContainerModule.State
> {
  render() {
    return <DayColumnPresenter />;
  }
}

export default DayColumnContainer;
