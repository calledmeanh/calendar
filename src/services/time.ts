import {
  SECONDS_PER_HOUR,
  SECONDS_PER_MINUTE,
  HAFT_DAY_SECONDS,
} from "../constants";
import { TDayTime, TTimeFormat } from "../models";

export const TimeService = {
  checkGroupTime,
  covertHourToSeconds,
  covertSecondsToHour,
  calcTimeJump,
  checkToDisplayTime,
  convertSecondsToHourString,
  checkWorkingTime,
  calcDistanceBetweenTimes,
};

function checkGroupTime(
  groupTimeDuration: number,
  duration: number,
  timeJumpIndex: number,
  groupBy: "bottom" | "top" = "bottom"
): boolean {
  const groupStep = groupTimeDuration / duration;
  let index = timeJumpIndex + 1;
  if (groupBy === "top") {
    index = timeJumpIndex;
  }
  if (index % groupStep === 0) {
    return true;
  }
  return false;
}

function calcDistanceBetweenTimes(
  end: number,
  start: number,
  duration: number,
  lineHeight: number
): number {
  const jumps = calcTimeJump(end, start, duration);
  let height: number = jumps * lineHeight;

  const rest = end - (duration * jumps + start);
  const restHeight = (rest * lineHeight) / duration;

  return height + restHeight;
}

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
  const step = S / duration;
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
