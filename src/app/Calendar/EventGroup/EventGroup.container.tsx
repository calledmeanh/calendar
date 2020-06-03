import React, { Component } from "react";
import EventGroupPresenter from "./EventGroup.presenter";
import { TEvent } from "../../../models";

export declare module EventGroupContainerModule {
  export type Props = {
    events: TEvent[] | undefined;
  };
  export type State = {};

  export type Prensenter = {
    events: TEvent[] | undefined;
  };
}

class EventGroupContainer extends Component<
  EventGroupContainerModule.Props,
  EventGroupContainerModule.State
> {
  
  render() {
    return <EventGroupPresenter events={this.props.events} />;
  }
}

export default EventGroupContainer;
