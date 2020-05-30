import { SECONDS_PER_HOUR, SECONDS_PER_MINUTE } from "../constants";
import { TDayTime } from "../models";

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

function convertSecondsToHourString(seconds: number): string {
  const { hour, minute } = covertSecondsToHour(seconds);
  return `${("0" + hour).slice(-2)}:${("0" + minute).slice(-2)}`;
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
