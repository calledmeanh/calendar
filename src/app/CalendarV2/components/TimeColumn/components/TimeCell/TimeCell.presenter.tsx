import React, { useContext } from "react";
import { CalendarContext, CLASSNAMES } from "../../../../../../constants";
import { TimeUtil } from "../../../../../../utils";

export declare module TimeCellModule {
  export type Props = {
    data: number;
    isWorkingTime: boolean;
  };
}

const TimeCellPresenter: React.FC<TimeCellModule.Props> = (props) => {
  const { displayDuration, workingTime, timeFormat, dayTime } = useContext(CalendarContext);
  return (
    <div className={CLASSNAMES.TIME_CELL}>
      <span className={CLASSNAMES.TIME_CELL_DATA}>
        {TimeUtil.checkToDisplayTime(props.data, workingTime.start, displayDuration)
          ? TimeUtil.convertSecondsToHourString(props.data, timeFormat)
          : ""}
        {console.log(TimeUtil.checkToDisplayTime(props.data, workingTime.start, displayDuration))}
      </span>
      <div className={CLASSNAMES.TIME_CELL_LINE}></div>
    </div>
  );
};
export default TimeCellPresenter;
