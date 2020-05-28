import React, { Component } from "react";
import { LabelPresenter } from "./Label.presenter";
import { UserAvaContainer } from "../../UserAva/UserAva.container";

export declare module LabelContainerModule {
  export type Props = {};
  export type State = {};
  export type Presenter = {
    item: string | React.ReactNode;
  };
}

export class LabelContainer extends Component<
  LabelContainerModule.Props,
  LabelContainerModule.State
> {
  render() {
    return <LabelPresenter item={<UserAvaContainer />} />;
  }
}
