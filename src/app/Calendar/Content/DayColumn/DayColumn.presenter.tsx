import React, { useContext } from "react";
import "./DayColumn.style.scss";
import { DayColumnContainerModule } from "./DayColumn.container";
import { TimeService } from "../../../../services";
import DayCell from "../DayCell";
import EventGroup from "../../EventGroup";
import { CalendarContext } from "../../../../constants";

const DayColumnPresenter: React.FC<DayColumnContainerModule.Props> = (
  props
) => {
  const context = useContext(CalendarContext);

  const times = TimeService.calcTimeJump(
    context.dayTime.end,
    context.dayTime.start,
    context.duration
  );

  return (
    <div className="day-column">
      {new Array(times).fill(0).map((t, i) => {
        const currentTime = context.dayTime.start + i * context.duration;

        return (
          <DayCell
            key={i}
            data=""
            isWorkingTime={TimeService.checkWorkingTime(
              context.dayTime,
              context.workingTime,
              currentTime
            )}
          />
        );
      })}
      <EventGroup events={props.events} />
    </div>
  );
};
export default DayColumnPresenter;
