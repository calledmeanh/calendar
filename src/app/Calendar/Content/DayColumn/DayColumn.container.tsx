import React, { Component } from "react";
import DayColumnPresenter from "./DayColumn.presenter";
import { TEvent } from "../../../../models";

export declare module DayColumnContainerModule {
  export type Props = {
    events: TEvent[] | undefined;
  };
  export type State = {};
}

class DayColumnContainer extends Component<
  DayColumnContainerModule.Props,
  DayColumnContainerModule.State
> {
  render() {
    return <DayColumnPresenter events={this.props.events} />;
  }
}

export default DayColumnContainer;
