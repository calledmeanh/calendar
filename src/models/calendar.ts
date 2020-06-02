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
};

export type TCalendarContext = {
  duration: number;
  displayDuration: number;
  workingTime: TDayTime;
  dayTime: TDayTime;
  timeFormat: TTimeFormat;
};
