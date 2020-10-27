import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { CONFIG, STYLES } from "../constants";
import { TCalendar, TTimeManipulate } from "../models";
import { Flex } from "./common";
import Toolbar from "./Toolbar";
import Content from "./Content";
import { DateUtils } from "../utils/date";

export const CalendarContext: React.Context<TCalendar> = React.createContext<TCalendar>({} as any);
export const TimeManiputeContext: React.Context<TTimeManipulate> = React.createContext<TTimeManipulate>({} as any);

const Wrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  background: ${STYLES.BACKGROUND};
  position: relative;
`;

const Calendar = (props: TCalendar) => {
  const today: string = moment().format(CONFIG.DEFAULT_DATE_FOTMAT);
  const [now, setNow] = useState<string>(today);
  const onPrev = () => {
    const prev: string = DateUtils.prev(now);
    setNow(prev);
  };
  const onNext = () => {
    const next: string = DateUtils.next(now);
    setNow(next);
  };
  const onToday = () => {
    const today: string = DateUtils.today();
    setNow(today);
  };

  const defaultConfig: TCalendar = {
    duration: props.duration,
    displayDuration: props.displayDuration,
    workingTime: props.workingTime,
    dayTime: props.dayTime,
    timeFormat: props.timeFormat,
    groupTime: props.groupTime,
    nowIndicator: props.nowIndicator,
  };

  // idtf = identify
  return (
    <CalendarContext.Provider value={defaultConfig}>
      <Wrapper data-idtf={"calendar"} direction={"column"} justify={"center"} align={"center"}>
        <TimeManiputeContext.Provider value={{ now, onPrev, onNext, onToday }}>
          <Toolbar />
          <Content />
        </TimeManiputeContext.Provider>
      </Wrapper>
    </CalendarContext.Provider>
  );
};

export default Calendar;
