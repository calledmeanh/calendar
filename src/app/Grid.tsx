import React, { useContext } from "react";
import styled from "styled-components";
import { CONFIG } from "../constants";
import { TCalendar } from "../models";
import { TimeUtil } from "../utils";
import clsx from "../utils/clsx";
import { CalendarContext } from "./Calendar";
import { Line } from "./common";

const Wrapper = styled.div`
  touch-action: pan-y;
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 8px 8px;
  background-image: linear-gradient(
    45deg,
    transparent 46%,
    rgba(16, 25, 40, 0.2) 49%,
    rgba(16, 25, 40, 0.2) 51%,
    transparent 55%
  );
  background-color: #eef0f2;
`;

function Grid() {
  const calendarContext: TCalendar = useContext(CalendarContext);

  const getTimes = () => {
    const timeJump: number = TimeUtil.calcTimeJump(
      calendarContext.dayTime.end,
      calendarContext.dayTime.start,
      calendarContext.duration
    );
    const times: number[] = new Array(timeJump).fill(0);
    return times;
  };
  return (
    <Wrapper data-idtf={"grid"}>
      {getTimes().map((t, i) => {
        const currentTime: number = calendarContext.dayTime.start + i * calendarContext.duration;
        const time: string = TimeUtil.convertSecondsToHourString(currentTime, calendarContext.timeFormat);
        const showTime: boolean = TimeUtil.checkToDisplayTime(
          currentTime,
          calendarContext.dayTime.start,
          calendarContext.duration * CONFIG.DEFAULT_MAPPING_TIME[calendarContext.duration]
        );
        const workingTime: boolean = TimeUtil.checkWorkingTime(
          calendarContext.dayTime,
          calendarContext.workingTime,
          currentTime
        );
        const groupTime: boolean = TimeUtil.checkGroupTime(
          calendarContext.groupTime,
          calendarContext.duration,
          i,
          "top"
        );
        const classname = clsx({
          wt: workingTime,
          gt: groupTime,
        });
        return <Line data-idtf={"line"} justify={"flex-start"} align={"center"} className={classname} key={i}></Line>;
      })}
    </Wrapper>
  );
}

export default Grid;
