import {
  SECONDS_PER_HOUR,
  SECONDS_PER_MINUTE,
  HAFT_DAY_SECONDS,
} from "../constants";
import { TDayTime, TTimeFormat } from "../models";

export const TimeService = {
  covertHourToSeconds,
  covertSecondsToHour,
  calcTimeJump,
  checkToDisplayTime,
  convertSecondsToHourString,
  checkWorkingTime,
};

function covertHourToSeconds(hour: number, minute: number): number {
  const result = hour * SECONDS_PER_HOUR + minute * SECONDS_PER_MINUTE;
  return result;
}

function covertSecondsToHour(
  seconds: number
): { hour: number; minute: number } {
  const hour = Math.floor(seconds / SECONDS_PER_HOUR);
  const minute = (seconds - hour * SECONDS_PER_HOUR) / SECONDS_PER_MINUTE;
  return {
    hour,
    minute: Math.floor(minute),
  };
}

function calcTimeJump(end: number, start: number, duration: number) {
  const S = end - start;
  const step = S / duration + 1;
  return Math.floor(step);
}

function checkToDisplayTime(
  current: number,
  start: number,
  displayDuration: number
): boolean {
  return (current - start) % displayDuration === 0 ? true : false;
}

function convertSecondsToHourString(
  seconds: number,
  timeFormat?: TTimeFormat
): string {
  let tempSeconds = seconds;
  if (timeFormat === 12 && seconds >= 13 * SECONDS_PER_HOUR) {
    tempSeconds = seconds - 12 * SECONDS_PER_HOUR;
  }
  let time = covertSecondsToHour(Math.abs(tempSeconds));

  let timeString = `${formatHourOrMinute(time.hour)}:${formatHourOrMinute(
    time.minute
  )}`;

  if (timeFormat === 12) {
    timeString = `${timeString} ${seconds <= HAFT_DAY_SECONDS ? "AM" : "PM"}`;
  }

  return timeString;
}

function checkWorkingTime(
  dayTime: TDayTime,
  workingTime: TDayTime,
  current: number
): boolean {
  // không có dayTime
  if (dayTime.end === workingTime.end && dayTime.start === workingTime.start) {
    return false;
  }

  if (workingTime.start <= current && current <= workingTime.end) {
    return true;
  }

  return false;
}

function formatHourOrMinute(data: number): string {
  return ("0" + data).slice(-2);
}
