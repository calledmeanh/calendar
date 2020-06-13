import { TEvent } from "./event";

export type TCalendar = {
  duration: number;
  displayDuration: number;
  workingTime: TDayTime;
  dayTime: TDayTime;
};

export type TDayTime = {
  start: number;
  end: number;
};

export type TTimeFormat = 12 | 24;

// model for user when using calendar library
export type TCalendarProps = {
  duration: number;
  displayDuration?: number;
  workingTime: TDayTime;
  dayTime?: TDayTime;
  timeFormat?: TTimeFormat;
  events?: TEvent[] | undefined;
  label?: string | React.ReactNode;
  groupTime?: number;
};

export type TCalendarContext = {
  duration: number;
  displayDuration: number;
  workingTime: TDayTime;
  dayTime: TDayTime;
  timeFormat: TTimeFormat;
  events?: TEvent[] | undefined;
  label: string | React.ReactNode;
  groupTime: number;
};
