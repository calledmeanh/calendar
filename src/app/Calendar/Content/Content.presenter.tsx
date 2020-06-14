import React, { useContext } from "react";
import "./Content.style.scss";
import moment from "moment";
import { ContentContainerModule } from "./Content.container";
import TimeColumn from "./TimeColumn";
import DayColumn from "./DayColumn";
import { CalendarContext, DEFAULT_DATE_FOTMAT, CLASSNAMES } from "../../../constants";
import { week } from "../../../mocks";
import Ghost from "./Ghost";
import NowIndicator from "./NowIndicator";

const ContentPresenter: React.FC<ContentContainerModule.Props> = (props) => {
  const { duration, displayDuration, workingTime, dayTime, events, nowIndicator } = useContext(CalendarContext);
  const childProps = {
    duration,
    displayDuration,
    workingTime,
    dayTime,
  };

  const mappingEvents: { [key: string]: any } = {};
  if (events && events.length) {
    for (let i = 0; i < events.length; i++) {
      const evtDay = moment(events[i].timeStart).format(DEFAULT_DATE_FOTMAT).toString();
      mappingEvents[evtDay] = [...(mappingEvents[evtDay] || []), events[i]];
    }
  }

  return (
    <div className={CLASSNAMES.CONTENT}>
      {nowIndicator && <NowIndicator />}
      <TimeColumn {...childProps} />

      <div className={CLASSNAMES.CONTENT_INNER}>
        {week.map((w) => {
          return <DayColumn key={w} events={mappingEvents[w] || undefined} />;
        })}
        <Ghost />
      </div>
    </div>
  );
};

export default ContentPresenter;
