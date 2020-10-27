import moment from "moment";
import React, { useState } from "react";
import styled from "styled-components";
import { CONFIG } from "../constants";
import { TCalendar, TTimeManipulate } from "../models";
import Toolbar from "./Toolbar";

export const CalendarContext: React.Context<TCalendar> = React.createContext<TCalendar>({} as any);
export const TimeManiputeContext: React.Context<TTimeManipulate> = React.createContext<TTimeManipulate>({} as any);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #f7f7f8;
  position: relative;
`;

const Calendar = (props: TCalendar) => {
  const today: string = moment().format(CONFIG.DEFAULT_DATE_FOTMAT);
  const [now, setNow] = useState<string>(today);
  const onPrev = () => {
    const prev: string = moment(now).subtract(1, "days").format(CONFIG.DEFAULT_DATE_FOTMAT);
    setNow(prev);
  };
  const onNext = () => {
    const next: string = moment(now).add(1, "days").format(CONFIG.DEFAULT_DATE_FOTMAT);
    setNow(next);
  };
  const onToday = () => {
    const today: string = moment().format(CONFIG.DEFAULT_DATE_FOTMAT);
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

  return (
    <CalendarContext.Provider value={defaultConfig}>
      <Wrapper>
        <TimeManiputeContext.Provider value={{ now, onPrev, onNext, onToday }}>
          <Toolbar />
        </TimeManiputeContext.Provider>
      </Wrapper>
    </CalendarContext.Provider>
  );
};

export default Calendar;
