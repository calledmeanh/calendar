export type TCalendar = {
  duration: number;
  displayDuration: number;
  workingTime: TDayTime;
  dayTime: TDayTime;
  timeFormat: TTimeFormat;
  groupTime: number;
  nowIndicator: boolean;
};

export type TTimeManipulate = {
  now: string;
  onNext: () => void;
  onPrev: () => void;
  onToday: () => void;
};

export type TDayTime = {
  start: number;
  end: number;
};

export type TTimeFormat = 12 | 24;
