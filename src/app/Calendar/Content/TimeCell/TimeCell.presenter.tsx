import React, { useContext } from "react";
import "./TimeCell.style.scss";
import { TimeCellContainerModule } from "./TimeCell.container";
import { CalendarContext } from "../../../../constants";
import { TimeService } from "../../../../services";

const TimeCellPresenter: React.FC<TimeCellContainerModule.Presenter> = (
  props
) => {
  const { displayDuration, workingTime } = useContext(CalendarContext);
  return (
    <div
      className="time-cell"
      style={{ backgroundColor: props.isWorkingTime ? "#fff" : "" }}
    >
      {TimeService.checkToDisplayTime(
        props.data,
        workingTime.start,
        displayDuration
      )
        ? TimeService.convertSecondsToHourString(props.data)
        : ""}
    </div>
  );
};
export default TimeCellPresenter;
