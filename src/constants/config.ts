import { TDayTime, TTimeFormat } from "../models";

const SECONDS_PER_HOUR: number = 3600;
const SECONDS_PER_MINUTE: number = 60;

const HAFT_DAY_SECONDS: number = 12 * SECONDS_PER_HOUR - 1; // 11h59m59s

const DEFAULT_DURATION: number = 15 * SECONDS_PER_MINUTE;

const DEFAULT_TIME_FORMAT: TTimeFormat = 24;

const DEFAULT_GROUP_TIME: number = 60 * SECONDS_PER_HOUR;

const DEFAULT_DAY_TIME: TDayTime = {
  start: 0 * SECONDS_PER_HOUR,
  end: 24 * SECONDS_PER_HOUR,
};

const DEFAULT_WORKING_TIME: TDayTime = {
  start: 8 * SECONDS_PER_HOUR,
  end: 20 * SECONDS_PER_HOUR,
};

const DEFAULT_MAPPING_TIME: any = {
  300: 3,
  600: 3,
  900: 4,
  1800: 2,
};

const DEFAULT_DATE_FOTMAT: string = "YYYY/MM/DD";

const DEFAULT_TIME_FOTMAT: string = "hh:mm:ss";

const DEFAULT_DATE_TIME_FOTMAT: string = "DD MM YYYY hh:mm:ss";

const WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const CONFIG = {
  SECONDS_PER_HOUR,
  SECONDS_PER_MINUTE,
  HAFT_DAY_SECONDS,
  DEFAULT_DURATION,
  DEFAULT_TIME_FORMAT,
  DEFAULT_GROUP_TIME,
  DEFAULT_DATE_FOTMAT,
  DEFAULT_TIME_FOTMAT,
  DEFAULT_DATE_TIME_FOTMAT,
  DEFAULT_DAY_TIME,
  DEFAULT_WORKING_TIME,
  DEFAULT_MAPPING_TIME,
  WEEK,
};
