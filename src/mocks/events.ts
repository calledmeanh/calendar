import { TEvent } from "../models";

export const EVENTS: TEvent[] = [
  {
    id: "evt1",
    title: "Event 1",
    timeStart: new Date("2020-06-02 09:10:00").toISOString(),
    timeEnd: new Date("2020-06-02 10:30:00").toISOString(),
  },
  {
    id: "evt2",
    title: "Event 2",
    timeStart: new Date("2020-06-02 15:35:00").toISOString(),
    timeEnd: new Date("2020-06-02 16:20:00").toISOString(),
  },
  {
    id: "evt3",
    title: "Event 3",
    timeStart: new Date("2020-06-04 08:30:00").toISOString(),
    timeEnd: new Date("2020-06-04 16:20:00").toISOString(),
  },
  {
    id: "evt4",
    title: "Event 4",
    timeStart: new Date("2020-06-01 12:15:00").toISOString(),
    timeEnd: new Date("2020-06-01 16:00:00").toISOString(),
  },
  {
    id: "evt5",
    title: "Event 5",
    timeStart: new Date("2020-06-06 13:45:00").toISOString(),
    timeEnd: new Date("2020-06-06 16:05:00").toISOString(),
  },
  {
    id: "evt6",
    title: "Event 6",
    timeStart: new Date("2020-06-04 11:45:00").toISOString(),
    timeEnd: new Date("2020-06-04 12:30:00").toISOString(),
  },
];
