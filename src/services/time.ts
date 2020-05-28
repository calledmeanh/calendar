import { times } from "../mocks/time";

export const TimeService = {
  getTimes,
};

function getTimes() {
  return {
    data: times,
  };
}
