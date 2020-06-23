import React, { useContext } from "react";
import "./TimeCell.style.scss";
import { TimeCellContainerModule } from "./TimeCell.container";
import { CalendarContext, CLASSNAMES } from "../../../../constants";
import { TimeUtil } from "../../../../utils";

const TimeCellPresenter: React.FC<TimeCellContainerModule.Props> = (props) => {
  const { displayDuration, workingTime, timeFormat, dayTime } = useContext(CalendarContext);
  return (
    <div className={CLASSNAMES.TIME_CELL}>
      <span className={CLASSNAMES.TIME_CELL_DATA}>
        {TimeUtil.checkToDisplayTime(props.data, workingTime.start, displayDuration) && props.data !== dayTime.start
          ? TimeUtil.convertSecondsToHourString(props.data, timeFormat)
          : ""}
        {console.log(TimeUtil.checkToDisplayTime(props.data, workingTime.start, displayDuration))}
      </span>
      <div className={CLASSNAMES.TIME_CELL_LINE}></div>
    </div>
  );
};
export default TimeCellPresenter;
