import React, { useContext } from "react";
import "./DayCell.style.scss";
import { DayCellContainerModule } from "./DayCell.container";
import { TimeService } from "../../../../services";
import { CalendarContext } from "../../../../constants";

const DayCellPresenter: React.FC<DayCellContainerModule.Props> = (props) => {
  const context = useContext(CalendarContext);
  const groupTime = TimeService.checkGroupTime(context.groupTime, context.duration, props.timeJumpIndex);
  
  return (
    <div
      className="day-cell"
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
