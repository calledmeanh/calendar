import React, { Component } from "react";
import { LabelPresenter } from "./Label.presenter";
import { UserAvaContainer } from "../../UserAva/UserAva.container";

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

export class LabelContainer extends Component<LabelContainerModule.Props, LabelContainerModule.State> {
  render() {
    return <LabelPresenter item={<UserAvaContainer />} width={this.props.width} />;
  }
}
