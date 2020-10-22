import React from "react";
import { CONFIG } from "../../constants";

export const CalendarContext = React.createContext<any>({
  duration: CONFIG.DEFAULT_DURATION,
  displayDuration: CONFIG.DEFAULT_DURATION,
  workingTime: CONFIG.DEFAULT_WORKING_TIME,
  dayTime: CONFIG.DEFAULT_WORKING_TIME,
  timeFormat: CONFIG.DEFAULT_TIME_FORMAT,
  groupTime: CONFIG.DEFAULT_GROUP_TIME,
  nowIndicator: true,
});

const Calendar: React.FC = (props) => {
  return <div className="calendar"></div>;
};

export default Calendar;
