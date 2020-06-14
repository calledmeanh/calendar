import React, { useEffect, useContext } from "react";

import "./NowIndicator.style.scss";
import { TimeService } from "../../../../services";
import { CalendarContext, CLASSNAMES } from "../../../../constants";
import { addFirstChar } from "../../../../utils";

const NowIndicatorPresenter: React.FC = () => {
  const context = useContext(CalendarContext);

  useEffect(() => {
    const nowDate = new Date();
    const nowTime = TimeService.covertHourToSeconds(nowDate.getHours(), nowDate.getMinutes()) + nowDate.getSeconds();
    if (nowTime < context.dayTime.end) {
      setInterval(() => {
        const currentDate = new Date();
        const currentTime = TimeService.covertHourToSeconds(currentDate.getHours(), currentDate.getMinutes());

        setTimeTextBox(currentTime);
        onChangeTime(currentTime);
      }, 1000);
    }

    // eslint-disable-next-line
  }, []);

  const setTimeTextBox = (currentTime: number) => {
    const timeCell = document.querySelector(addFirstChar(CLASSNAMES.TIME_CELL, ".")) as HTMLDivElement;
    const nowIndicatorText = document.querySelector(addFirstChar(CLASSNAMES.NOW_INDICATOR_TEXT, ".")) as HTMLDivElement;
    const timeCellBox = timeCell.getBoundingClientRect();
    const time = TimeService.convertSecondsToHourString(currentTime, context.timeFormat);

    nowIndicatorText.style.width = timeCellBox.width + "px";
    nowIndicatorText.innerHTML = time;
  };

  const onChangeTime = (currentTime: number) => {
    const timeCell = document.querySelector(addFirstChar(CLASSNAMES.TIME_CELL, ".")) as HTMLDivElement;
    const timeCellBox = timeCell.getBoundingClientRect();

    const nowIndicator = document.querySelector(addFirstChar(CLASSNAMES.NOW_INDICATOR, ".")) as HTMLDivElement;

    const top = TimeService.calcDistanceBetweenTimes(
      currentTime,
      context.dayTime.start,
      context.duration,
      timeCellBox.height
    );

    nowIndicator.style.top = top + "px";
  };

  return (
    <div className={CLASSNAMES.NOW_INDICATOR}>
      <div className={CLASSNAMES.NOW_INDICATOR_TEXT}></div>
      <div className={CLASSNAMES.NOW_INDICATOR_TAIL}></div>
    </div>
  );
};

export default NowIndicatorPresenter;
