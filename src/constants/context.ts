import React from "react";
import { TCalendar } from "../models";
import { DEFAULT_DURATION, DEFAULT_WORKING_TIME } from "./calendar";

export const CalendarContext = React.createContext<TCalendar>({
  duration: DEFAULT_DURATION,
  displayDuration: DEFAULT_DURATION,
  workingTime: DEFAULT_WORKING_TIME,
  dayTime: DEFAULT_WORKING_TIME,
});
