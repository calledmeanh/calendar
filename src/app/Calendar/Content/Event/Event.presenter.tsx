import React from "react";
import "./Event.style.scss";
import { TEvent } from "../../../../models";
import moment from "moment";
import { DEFAULT_DATE_TIME_FOTMAT } from "../../../../constants";

interface Props {
  top: string;
  bottom?: string;
  event: TEvent;
  height?: string;
}

const EventPresenter: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        top: props.top,
        bottom: props.bottom || undefined,
        height: props.height || undefined,
      }}
      className="event"
    >
      <div className="event-title">{props.event.title}</div>
      <div className="event-content">
        <div>
          Start:{" "}
          {moment(props.event.timeStart).format(DEFAULT_DATE_TIME_FOTMAT)}
        </div>
        <div>
          End: {moment(props.event.timeEnd).format(DEFAULT_DATE_TIME_FOTMAT)}
        </div>
      </div>
    </div>
  );
};
export default EventPresenter;
