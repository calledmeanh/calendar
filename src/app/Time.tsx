import React, { useContext } from "react";
import styled from "styled-components";
import { CONFIG, STYLES } from "../constants";
import { TCalendar } from "../models";
import { TimeUtil } from "../utils";
import clsx from "../utils/clsx";
import { CalendarContext } from "./Calendar";
import { Line } from "./common";

const Wrapper = styled.div`
  width: 48px;
  height: max-content;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${STYLES.BORDER_COLOR};
`;

function Time() {
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
    <Wrapper data-idtf={"time"}>
      {getTimes().map((t, i) => {
        const currentTime: number = calendarContext.dayTime.start + i * calendarContext.duration;
        const time: string = TimeUtil.convertSecondsToHourString(currentTime, calendarContext.timeFormat);
        const showTime: boolean = TimeUtil.checkToDisplayTime(
          currentTime,
          calendarContext.dayTime.start,
          calendarContext.duration * CONFIG.DEFAULT_MAPPING_TIME[calendarContext.duration]
        );
        const classname = clsx({
          ngt: true,
        });
        return (
          <Line data-idtf={"line"} justify={"center"} align={"center"} className={classname} key={i}>
            {showTime && time}
          </Line>
        );
      })}
    </Wrapper>
  );
}

export default Time;
