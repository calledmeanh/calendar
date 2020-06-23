import React, { useContext } from "react";
import "./DayCell.style.scss";
import { DayCellContainerModule } from "./DayCell.container";
import { TimeUtil } from "../../../../utils";
import { CalendarContext, CLASSNAMES } from "../../../../constants";

const DayCellPresenter: React.FC<DayCellContainerModule.Props> = (props) => {
  const context = useContext(CalendarContext);
  const groupTime = TimeUtil.checkGroupTime(context.groupTime, context.duration, props.timeJumpIndex);

  return (
    <div
      className={CLASSNAMES.DAY_CELL}
      style={{
        backgroundColor: props.isWorkingTime ? "#fff" : "",
        borderBottom: groupTime ? "1px solid #dee3e7" : undefined,
      }}
    >
      {/* {props.data} */}
    </div>
  );
};
export default DayCellPresenter;
