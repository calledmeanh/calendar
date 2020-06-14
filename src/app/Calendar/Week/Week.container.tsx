import React, { Component } from "react";
import WeekPresenter from "./Week.presenter";
import { WeekService } from "../../../services/week";

export declare module WeekContainerModule {
  export type Props = {
    data: string[];
  };

  export type State = {};
}

class WeekContainer extends Component<Omit<WeekContainerModule.Props, "data">, WeekContainerModule.State> {
  week = WeekService.getWeek();
  render() {
    return <WeekPresenter data={this.week.data} />;
  }
}

export default WeekContainer;
