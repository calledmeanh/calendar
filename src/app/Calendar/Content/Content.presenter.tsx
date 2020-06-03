import React, { useContext } from "react";
import moment from "moment";
import "./Content.style.scss";
import { ContentContainerModule } from "./Content.container";
import TimeColumn from "./TimeColumn";
import DayColumn from "./DayColumn";
import { CalendarContext, DEFAULT_DATE_FOTMAT } from "../../../constants";
import { week } from "../../../mocks";

const ContentPresenter: React.FC<ContentContainerModule.Prensenter> = () => {
  const {
    duration,
    displayDuration,
    workingTime,
    dayTime,
    events,
  } = useContext(CalendarContext);
  const childProps = {
    duration,
    displayDuration,
    workingTime,
    dayTime,
  };

  let mappingEvents: { [key: string]: any } = {};
  if (events && events.length > 0) {
    for (let i = 0; i < events.length; i++) {
      const evtDay = moment(events[i].timeStart)
        .format(DEFAULT_DATE_FOTMAT)
        .toString();
      mappingEvents[evtDay] = [...(mappingEvents[evtDay] || []), events[i]];
    }
  }

  return (
    <div className="content">
      <TimeColumn {...childProps} />
      {week.map((w) => {
        return <DayColumn key={w} events={mappingEvents[w] || undefined} />;
      })}
    </div>
  );
};

export default ContentPresenter;
