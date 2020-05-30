import React from "react";
import "./DayColumn.style.scss";
import { DayColumnContainerModule } from "./DayColumn.container";
import TimeService from "../../../../services/time";
import DayCell from "../DayCell";
import EventGroup from "../../EventGroup";

const DayColumnPresenter: React.FC<DayColumnContainerModule.Presenter> = (props) => {
  const times = TimeService.calcTimeJump(props.dayTime.end, props.dayTime.start, props.duration);
  return (
    <div className="day-column">
      {new Array(times).fill(0).map((t, i) => {
        const time = TimeService.covertSecondsToHour(props.dayTime.start + i * props.duration);
        return <DayCell key={i} data={`${time.hour}:${time.minute}`} />;
      })}
      <EventGroup />
    </div>
  );
};
export default DayColumnPresenter;
