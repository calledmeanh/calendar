import React, { useEffect, useContext } from "react";

import "./NowIndicator.style.scss";
import { TimeService } from "../../../../services";
import { CalendarContext } from "../../../../constants";

const NowIndicatorPresenter: React.FC = () => {
  const context = useContext(CalendarContext);

  useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();
      const currentTime = TimeService.covertHourToSeconds(currentDate.getHours(), currentDate.getMinutes());

      setTimeTextBox(currentTime);
      onChangeTime(currentTime);
    }, 1000);

    // eslint-disable-next-line
  }, []);

  const setTimeTextBox = (currentTime: number) => {
    const timeCell = document.querySelector(".time-cell") as HTMLDivElement;
    const nowIndicatorText = document.querySelector(".now-indicator-text") as HTMLDivElement;

    const timeCellBox = timeCell.getBoundingClientRect();
    nowIndicatorText.style.width = timeCellBox.width + "px";
    const time = TimeService.convertSecondsToHourString(currentTime, context.timeFormat);
    nowIndicatorText.innerHTML = time;
  };

  const onChangeTime = (currentTime: number) => {
    const timeCell = document.querySelector(".time-cell") as HTMLDivElement;
    const nowIndicator = document.querySelector(".now-indicator") as HTMLDivElement;
    const timeCellBox = timeCell.getBoundingClientRect();

    const top = TimeService.calcDistanceBetweenTimes(
      currentTime,
      context.dayTime.start,
      context.duration,
      timeCellBox.height
    );

    nowIndicator.style.visibility = "visible";
    nowIndicator.style.top = top + "px";
  };

  return (
    <div className="now-indicator">
      <div className="now-indicator-text"></div>
      <div className="now-indicator-tail"></div>
    </div>
  );
};

export default NowIndicatorPresenter;
