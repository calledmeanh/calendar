import React, { Component } from "react";
import LabelPresenter from "./Label.presenter";

export declare module LabelContainerModule {
  export type Props = {
    width: number | string;
    item: string | React.ReactNode;
  };
  export type State = {};
}

class LabelContainer extends Component<
  LabelContainerModule.Props,
  LabelContainerModule.State
> {
  render() {
    return <LabelPresenter item={this.props.item} />;
  }
}

export default LabelContainer;
