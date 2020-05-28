import { week } from "../mocks/week";

export const WeekService = {
  getWeek,
};

function getWeek() {
  return {
    data: week,
  };
}
