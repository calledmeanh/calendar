import React, { Component } from "react";
import EventGroupPresenter from "./EventGroup.presenter";

export declare module EventGroupContainerModule {
  export type Props = {};
  export type State = {};

  export type Prensenter = {};
}

class EventGroupContainer extends Component<
  EventGroupContainerModule.Props,
  EventGroupContainerModule.State
> {
  render() {
    return <EventGroupPresenter />;
  }
}

export default EventGroupContainer;
