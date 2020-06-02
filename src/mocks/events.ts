import { TEvent } from "../models";

export const EVENTS: TEvent[] = [
  {
    id: "evt1",
    title: "Event 1",
    timeStart: new Date("2020-06-02 09:10:00").toISOString(),
    timeEnd: new Date("2020-06-02 10:30:00").toISOString(),
  },
];
