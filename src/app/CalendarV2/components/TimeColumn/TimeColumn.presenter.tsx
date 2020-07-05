import React, { useContext } from "react";
import "./TimeColumn.style.scss";
import TimeCell from "./components/TimeCell";
import { TimeUtil } from "../../../../utils";
import { CalendarContext, CLASSNAMES } from "../../../../constants";

declare module TimeColumnModule {
  export type Props = {};
}

const TimeColumnPresenter: React.FC<TimeColumnModule.Props> = (props) => {
  const context = useContext(CalendarContext);
  const times = TimeUtil.calcTimeJump(context.dayTime.end, context.dayTime.start, context.duration);
  const timeArr = new Array(times).fill(0);
  return (
    <div className={CLASSNAMES.TIME_COLUMN}>
      <div className="time-column__label"></div>
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
