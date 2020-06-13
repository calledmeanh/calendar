import React, { Component } from "react";
import ContentPresenter from "./Content.presenter";

export declare module ContentContainerModule {
  export type Props = {};
  export type State = {};
}

class ContentContainer extends Component<
  ContentContainerModule.Props,
  ContentContainerModule.State
> {
  render() {
    return <ContentPresenter />;
  }
}

export default ContentContainer;
