import React, { Component } from "react";
import { TimeGridPresenter } from "./TimeGrid.presenter";
export declare module TimeGridContainerModule {
  export type Props = {};
  export type State = {};
  export type Presenter = {};
}
export class TimeGridContainer extends Component<TimeGridContainerModule.Props, TimeGridContainerModule.State> {
  render() {
    return <TimeGridPresenter />;
  }
}
