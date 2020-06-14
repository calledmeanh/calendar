import React, { useContext } from "react";
import "./TimeColumn.style.scss";
import { TimeColumnContainerModule } from "./TimeColumn.container";
import TimeCell from "../TimeCell";
import { TimeService } from "../../../../services";
import { CalendarContext, CLASSNAMES } from "../../../../constants";

const TimeColumnPresenter: React.FC<TimeColumnContainerModule.Props> = (props) => {
  const context = useContext(CalendarContext);
  const times = TimeService.calcTimeJump(context.dayTime.end, context.dayTime.start, context.duration);
  const timeArr = new Array(times).fill(0);
  return (
    <div className={CLASSNAMES.TIME_COLUMN}>
      {timeArr.map((t, i) => {
        const currentTime = context.dayTime.start + i * context.duration;

        return (
          <TimeCell
            key={i}
            data={currentTime}
            isWorkingTime={TimeService.checkWorkingTime(context.dayTime, context.workingTime, currentTime)}
          />
        );
      })}
    </div>
  );
};
export default TimeColumnPresenter;
