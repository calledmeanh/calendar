import React, { useEffect, useContext, useState } from "react";
import "./EventGroup.style.scss";
import { EventGroupContainerModule } from "./EventGroup.container";
import Event from "../Content/Event/Event.presenter";
import { TDayTime, TEvent } from "../../../models";
import { CalendarContext } from "../../../constants";
import { TimeService } from "../../../services";

const EventGroupPresenter: React.FC<EventGroupContainerModule.Props> = (
  props
) => {
  const context = useContext(CalendarContext);
  const [timeCellPos, setTimeCellPos] = useState<any>(null);
  const calcEventPosition = (dayTime: TDayTime, evt: TEvent, eventPos: any) => {
    const evtStartTime = new Date(evt.timeStart);
    const evtEndTime = new Date(evt.timeEnd);
    const evtStartSeconds = TimeService.covertHourToSeconds(
      evtStartTime.getHours(),
      evtStartTime.getMinutes()
    );
    const evtEndSeconds = TimeService.covertHourToSeconds(
      evtEndTime.getHours(),
      evtEndTime.getMinutes()
    );

    const top = TimeService.calcDistanceBetweenTimes(
      evtStartSeconds,
      dayTime.start,
      context.duration,
      eventPos.height
    );
    const height = TimeService.calcDistanceBetweenTimes(
      evtEndSeconds,
      evtStartSeconds,
      300,
      (eventPos.height * 300) / context.duration
    );

    return {
      top,
      height,
    };
  };

  const getLineHeightEvent = () => {
    const timeCell = document.querySelector(".time-cell");

    return timeCell?.getBoundingClientRect();
  };

  const handleResponsive = () => {
    setTimeCellPos(getLineHeightEvent());
  };

  useEffect(() => {
    handleResponsive();
    /* window.addEventListener("resize", handleResponsive);
    return () => {
      window.removeEventListener("resize", handleResponsive);
    }; */
  }, []);

  return (
    <div className="event-group" data-event-group-id={props.eventGroupId}>
      {timeCellPos &&
        props.events &&
        props.events.length > 0 &&
        props.events.map((e) => {
          const evtPos = calcEventPosition(context.dayTime, e, timeCellPos);

          return (
            <Event
              key={e.id}
              top={`${evtPos.top}px`}
              height={`${evtPos.height}px`}
              event={e}
            />
          );
        })}
    </div>
  );
};

export default EventGroupPresenter;
