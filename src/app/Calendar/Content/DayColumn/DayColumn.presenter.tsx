import React, { useContext } from "react";
import "./DayColumn.style.scss";
import { DayColumnContainerModule } from "./DayColumn.container";
import { TimeUtil } from "../../../../utils";
import DayCell from "../DayCell";
import EventGroup from "../../EventGroup";
import { CalendarContext, CLASSNAMES } from "../../../../constants";

const DayColumnPresenter: React.FC<DayColumnContainerModule.Props> = (props) => {
  const context = useContext(CalendarContext);

  const times = TimeUtil.calcTimeJump(context.dayTime.end, context.dayTime.start, context.duration);
  const timeArr = new Array(times).fill(0);
  return (
    <div className={CLASSNAMES.DAY_COLUMN}>
      {timeArr.fill(0).map((t, i) => {
        const currentTime = context.dayTime.start + i * context.duration;

        return (
          <DayCell
            key={i}
            data=""
            timeJumpIndex={i}
            isWorkingTime={TimeUtil.checkWorkingTime(context.dayTime, context.workingTime, currentTime)}
          />
        );
      })}
      <EventGroup {...props} />
    </div>
  );
};
export default DayColumnPresenter;
