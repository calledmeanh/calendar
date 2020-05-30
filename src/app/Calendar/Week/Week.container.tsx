import React, { Component } from "react";
import WeekPresenter from "./Week.presenter";
import { WeekService } from "../../../services/week";

export declare module WeekContainerModule {
  export type Props = {};

  export type State = {};

  export type Presenter = {
    data: string[];
  };
}

class WeekContainer extends Component<WeekContainerModule.State, WeekContainerModule.Props> {
  week = WeekService.getWeek();
  render() {
    return <WeekPresenter data={this.week.data} />;
  }
}

export default WeekContainer;
