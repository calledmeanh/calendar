import React from "react";
import "./TimeColumn.style.scss";
import { TimeColumnContainerModule } from "./TimeColumn.container";
import TimeCell from "../TimeCell";
import TimeService from "../../../../services/time";

const TimeColumnPresenter: React.FC<TimeColumnContainerModule.Presenter> = (
  props
) => {
  const times = TimeService.calcTimeJump(
    props.dayTime.end,
    props.dayTime.start,
    props.duration
  );

  return (
    <div className="time-column">
      {new Array(times).fill(0).map((t, i) => {
        const time = TimeService.covertSecondsToHour(
          props.dayTime.start + i * props.duration
        );
        return <TimeCell key={i} data={`${time.hour}:${time.minute}`} />;
      })}
    </div>
  );
};
export default TimeColumnPresenter;
