import React, { Component } from "react";
import { TimeCellPresenter } from "./TimeCell.presenter";
export declare module TimeCellContainerModule {
  export type Props = {
    data: string;
    options: { showContent: boolean };
    className?: string;
  };
  export type State = {};
  export type Presenter = {
    data: string;
    options: { showContent: boolean };
    className?: string;
  };
}
export class TimeCellContainer extends Component<
  TimeCellContainerModule.Props,
  TimeCellContainerModule.State
> {
  render() {
    return (
      <TimeCellPresenter
        data={this.props.data}
        options={{ showContent: this.props.options.showContent }}
        className={this.props.className}
      />
    );
  }
}
