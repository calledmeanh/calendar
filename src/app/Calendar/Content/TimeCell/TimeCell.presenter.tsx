import React, { useContext } from "react";
import "./TimeCell.style.scss";
import { TimeCellContainerModule } from "./TimeCell.container";
import { CalendarContext } from "../../../../constants";
import { TimeService } from "../../../../services";

const TimeCellPresenter: React.FC<TimeCellContainerModule.Presenter> = (
  props
) => {
  const { displayDuration, workingTime, timeFormat } = useContext(
    CalendarContext
  );
  return (
    <div
      className="time-cell"
      style={{ backgroundColor: props.isWorkingTime ? "#cccccc" : "" }}
    >
      {TimeService.checkToDisplayTime(
        props.data,
        workingTime.start,
        displayDuration
      )
        ? TimeService.convertSecondsToHourString(props.data, timeFormat)
        : ""}
    </div>
  );
};
export default TimeCellPresenter;
