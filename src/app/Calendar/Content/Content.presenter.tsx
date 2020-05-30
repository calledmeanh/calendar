import React, { useContext } from "react";
import "./Content.style.scss";
import { ContentContainerModule } from "./Content.container";
import TimeColumn from "./TimeColumn";
import DayColumn from "./DayColumn";
import { CalendarContext } from "../../../constants";

const ContentPresenter: React.FC<ContentContainerModule.Prensenter> = () => {
  const { duration, displayDuration, workingTime, dayTime } = useContext(
    CalendarContext
  );
  const childProps = {
    duration,
    displayDuration,
    workingTime,
    dayTime,
  };
  return (
    <div className="content">
      <TimeColumn {...childProps} />
      <DayColumn {...childProps} />
      <DayColumn {...childProps} />
      <DayColumn {...childProps} />
      <DayColumn {...childProps} />
      <DayColumn {...childProps} />
      <DayColumn {...childProps} />
      <DayColumn {...childProps} />
    </div>
  );
};

export default ContentPresenter;
