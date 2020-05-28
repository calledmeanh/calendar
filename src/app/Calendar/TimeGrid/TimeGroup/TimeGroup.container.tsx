import React, { Component } from "react";
import { TimeGroupPresenter } from "./TimeGroup.presenter";
import { TimeService } from "../../../../services/time";

export declare module TimeGroupContainerModule {
  export type Props = {};
  export type State = {};
  export type Presenter = {
    data: string[];
  };
}
export class TimeGroupContainer extends Component<
  TimeGroupContainerModule.Props,
  TimeGroupContainerModule.State
> {
  times = TimeService.getTimes();
  render() {
    return <TimeGroupPresenter data={this.times.data} />;
  }
}
