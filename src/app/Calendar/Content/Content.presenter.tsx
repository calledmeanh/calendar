import React from "react";
import "./Content.style.scss";
import { ContentContainerModule } from "./Content.container";
import TimeColumn from "./TimeColumn";
import DayColumn from "./DayColumn";

const ContentPresenter: React.FC<ContentContainerModule.Prensenter> = () => {
  return (
    <div className="content">
      <TimeColumn
        duration={60 * 30}
        displayDuration={60 * 60}
        workingTime={{ start: 3600 * 9, end: 3600 * 18 }}
        dayTime={{ start: 0, end: 3600 * 24 }}
      />
      <DayColumn
        duration={60 * 30}
        displayDuration={60 * 60}
        workingTime={{ start: 3600 * 9, end: 3600 * 18 }}
        dayTime={{ start: 0, end: 3600 * 24 }}
      />
      <DayColumn
        duration={60 * 30}
        displayDuration={60 * 60}
        workingTime={{ start: 3600 * 9, end: 3600 * 18 }}
        dayTime={{ start: 0, end: 3600 * 24 }}
      />
      <DayColumn
        duration={60 * 30}
        displayDuration={60 * 60}
        workingTime={{ start: 3600 * 9, end: 3600 * 18 }}
        dayTime={{ start: 0, end: 3600 * 24 }}
      />
      <DayColumn
        duration={60 * 30}
        displayDuration={60 * 60}
        workingTime={{ start: 3600 * 9, end: 3600 * 18 }}
        dayTime={{ start: 0, end: 3600 * 24 }}
      />
      <DayColumn
        duration={60 * 30}
        displayDuration={60 * 60}
        workingTime={{ start: 3600 * 9, end: 3600 * 18 }}
        dayTime={{ start: 0, end: 3600 * 24 }}
      />
      <DayColumn
        duration={60 * 30}
        displayDuration={60 * 60}
        workingTime={{ start: 3600 * 9, end: 3600 * 18 }}
        dayTime={{ start: 0, end: 3600 * 24 }}
      />
      <DayColumn
        duration={60 * 30}
        displayDuration={60 * 60}
        workingTime={{ start: 3600 * 9, end: 3600 * 18 }}
        dayTime={{ start: 0, end: 3600 * 24 }}
      />
    </div>
  );
};

export default ContentPresenter;
