import React from "react";
import "./EventGroup.style.scss";
import { EventGroupContainerModule } from "./EventGroup.container";
import EventPresenter from "../Content/Event/Event.presenter";

const EventGroupPresenter: React.FC<EventGroupContainerModule.Prensenter> = (
  props
) => {
  return (
    <div className="event-group">
      <EventPresenter />
    </div>
  );
};

export default EventGroupPresenter;
