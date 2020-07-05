import React, { useContext } from "react";
import HeaderPresenter from "./Header.presenter";

import { CalendarContext } from "../../../../../../constants";
import { TimeUtil } from "../../../../../../utils";
import LinePresenter from "./Line.presenter";

declare module ColumnModule {
  export type Props = {
    width: number;
    headerData: any;
  };
}

const ColumnPresenter: React.FC<ColumnModule.Props> = (props) => {
  const context = useContext(CalendarContext);
  const times = TimeUtil.calcTimeJump(context.dayTime.end, context.dayTime.start, context.duration);
  const timeArr = new Array(times).fill(0);
  return (
    <div className="content-view__col" style={{ minWidth: `${props.width}px` }}>
      <HeaderPresenter data={props.headerData} />
      {timeArr.map((t, i) => {
        const currentTime = context.dayTime.start + i * context.duration;

        return <LinePresenter key={i} data={TimeUtil.convertSecondsToHourString(currentTime)} />;
      })}
    </div>
  );
};

export default ColumnPresenter;
