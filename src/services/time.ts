import { times } from "../mocks/time";

export const TimeService = {
  getTime,
};

function getTime() {
  return {
    data: times,
  };
}
