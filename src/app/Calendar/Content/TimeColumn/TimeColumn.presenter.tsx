import React, { useContext } from "react";
import "./TimeColumn.style.scss";
import { TimeColumnContainerModule } from "./TimeColumn.container";
import TimeCell from "../TimeCell";
import { TimeUtil } from "../../../../utils";
import { CalendarContext, CLASSNAMES } from "../../../../constants";

const TimeColumnPresenter: React.FC<TimeColumnContainerModule.Props> = (props) => {
  const context = useContext(CalendarContext);
  const times = TimeUtil.calcTimeJump(context.dayTime.end, context.dayTime.start, context.duration);
  const timeArr = new Array(times).fill(0);
  return (
    <div className={CLASSNAMES.TIME_COLUMN}>
      {timeArr.map((t, i) => {
        const currentTime = context.dayTime.start + i * context.duration;

        return (
          <TimeCell
            key={i}
            data={currentTime}
            isWorkingTime={TimeUtil.checkWorkingTime(context.dayTime, context.workingTime, currentTime)}
          />
        );
      })}
    </div>
  );
};
export default TimeColumnPresenter;
