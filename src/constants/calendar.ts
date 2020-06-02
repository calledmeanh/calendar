import { TDayTime, TTimeFormat } from "../models";
import { SECONDS_PER_HOUR } from "./time";

export const HAFT_DAY_SECONDS = 12 * SECONDS_PER_HOUR - 1; // 11h59m59s
export const DEFAULT_DURATION = 900;
export const DEFAULT_TIME_FORMAT: TTimeFormat = 24;
export const DEFAULT_WORKING_TIME: TDayTime = {
  start: 28800,
  end: 61200,
};