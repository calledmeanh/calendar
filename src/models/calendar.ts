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

export type TCalendarProps = {
  duration: number;
  displayDuration?: number;
  workingTime: TDayTime;
  dayTime?: TDayTime;
};
