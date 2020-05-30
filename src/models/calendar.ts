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
