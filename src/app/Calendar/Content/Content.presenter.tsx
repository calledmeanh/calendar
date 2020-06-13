import React, { useContext } from "react";
import moment from "moment";
import "./Content.style.scss";
import { ContentContainerModule } from "./Content.container";
import TimeColumn from "./TimeColumn";
import DayColumn from "./DayColumn";
import { CalendarContext, DEFAULT_DATE_FOTMAT } from "../../../constants";
import { week } from "../../../mocks";

const ContentPresenter: React.FC<ContentContainerModule.Props> = () => {
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
  if (events && events.length) {
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

      <div className="content-inner">
        {week.map((w, i) => {
          return (
            <DayColumn
              key={w}
              events={mappingEvents[w] || undefined}
              eventGroupId={i}
            />
          );
        })}
        <div id="ghost" className="ghost"></div>
      </div>
    </div>
  );
};

export default ContentPresenter;
