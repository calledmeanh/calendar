import React, { Component } from "react";
import { DatePresenter } from "./Date.presenter";

export declare module DateContainerModule {
  export type Props = {
    data: string & React.ReactNode;
  };
  export type State = {};

  export type Prensenter = {
    data: string & React.ReactNode;
  };
}

export class DateContainer extends Component<
  DateContainerModule.Props,
  DateContainerModule.State
> {
  render() {
    return <DatePresenter data={this.props.data} />;
  }
}
