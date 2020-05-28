import React, { Component } from "react";
import { TimeEachDatePresenter } from "./TimeEachDate.presenter";
import { TimeService } from "../../../../services/time";
export declare module TimeEachDateContainerModule {
  export type Props = {};
  export type State = {};
  export type Presenter = {
    data: string[];
  };
}
export class TimeEachDateContainer extends Component<
  TimeEachDateContainerModule.Props,
  TimeEachDateContainerModule.State
> {
  times = TimeService.getTimes();
  render() {
    return <TimeEachDatePresenter data={this.times.data} />;
  }
}
