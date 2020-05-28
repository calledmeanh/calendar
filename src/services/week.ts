import { weeks } from "../mocks/week";

export const WeekService = {
  getWeek,
};

function getWeek() {
  return {
    data: weeks,
  };
}
