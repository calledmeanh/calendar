import React from "react";
import { TCalendarContext } from "../models";
import {
  DEFAULT_DURATION,
  DEFAULT_WORKING_TIME,
  DEFAULT_TIME_FORMAT,
} from "./calendar";

export const CalendarContext = React.createContext<TCalendarContext>({
  duration: DEFAULT_DURATION,
  displayDuration: DEFAULT_DURATION,
  workingTime: DEFAULT_WORKING_TIME,
  dayTime: DEFAULT_WORKING_TIME,
  timeFormat: DEFAULT_TIME_FORMAT,
});
