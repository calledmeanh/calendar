import React, { Component } from "react";
import LabelPresenter from "./Label.presenter";
import UserAva from "../../UserAva";

export declare module LabelContainerModule {
  export type Props = {
    width: number | string;
  };
  export type State = {};
  export type Presenter = {
    item: string | React.ReactNode;
    width: number | string;
  };
}

class LabelContainer extends Component<
  LabelContainerModule.Props,
  LabelContainerModule.State
> {
  render() {
    return <LabelPresenter item={<UserAva />} width={this.props.width} />;
  }
}

export default LabelContainer;
