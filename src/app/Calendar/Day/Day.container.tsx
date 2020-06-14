import React, { Component } from "react";
import DayPresenter from "./Day.presenter";

export declare module DayContainerModule {
  export type Props = {
    data: string | React.ReactNode;
  };
  export type State = {};
}

class DayContainer extends Component<
  DayContainerModule.Props,
  DayContainerModule.State
> {
  render() {
    return <DayPresenter data={this.props.data} />;
  }
}

export default DayContainer;
