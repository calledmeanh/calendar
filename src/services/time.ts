import { SECONDS_PER_HOUR, SECONDS_PER_MINUTE } from "../constants/time";

export const TimeService = {
  covertHourToSeconds,
  covertSecondsToHour,
  calcTimeJump,
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

export default TimeService;
