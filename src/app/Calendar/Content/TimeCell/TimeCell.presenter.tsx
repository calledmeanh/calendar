import React, { useContext } from "react";
import "./TimeCell.style.scss";
import { TimeCellContainerModule } from "./TimeCell.container";
import { CalendarContext } from "../../../../constants";
import { TimeService } from "../../../../services";

const TimeCellPresenter: React.FC<TimeCellContainerModule.Props> = (
  props
) => {
  const { displayDuration, workingTime, timeFormat, dayTime } = useContext(
    CalendarContext
  );
  return (
    <div
      className="time-cell"
      // style={{ backgroundColor: props.isWorkingTime ? "#cccccc" : "" }}
    >
      <span className="time-cell-data">
        {TimeService.checkToDisplayTime(
          props.data,
          workingTime.start,
          displayDuration
        ) && props.data !== dayTime.start
          ? TimeService.convertSecondsToHourString(props.data, timeFormat)
          : ""}
      </span>
      <div className="time-cell-line"></div>
    </div>
  );
};
export default TimeCellPresenter;
