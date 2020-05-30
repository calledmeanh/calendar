import React from "react";
import "./Content.style.scss";
import { ContentContainerModule } from "./Content.container";
import TimeColumn from "./TimeColumn";
import DayColumn from "./DayColumn";

const ContentPresenter: React.FC<ContentContainerModule.Prensenter> = () => {
  return (
    <div className="content">
      <TimeColumn />
      <DayColumn />
    </div>
  );
};

export default ContentPresenter;
