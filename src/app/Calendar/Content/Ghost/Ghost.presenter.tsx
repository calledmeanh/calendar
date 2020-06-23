import React, { useEffect, useContext } from "react";
import "./Ghost.style.scss";
import { TimeUtil } from "../../../../utils";
import { CalendarContext, CLASSNAMES } from "../../../../constants";
import { getOffsetToDocument, addFirstChar } from "../../../../utils";

const GhostPresenter: React.FC = () => {
  const context = useContext(CalendarContext);

  useEffect(() => {
    const contentInner = document.querySelector(addFirstChar(CLASSNAMES.CONTENT_INNER, ".")) as HTMLDivElement;
    const ghost = document.getElementById(CLASSNAMES.GHOST) as HTMLDivElement;

    contentInner.addEventListener("mousemove", function (e: any) {
      const contentContainer = document.querySelector(addFirstChar(CLASSNAMES.CONTENT, ".")) as HTMLDivElement;
      const topInner = getOffsetToDocument(contentInner, "top");
      const leftInner = getOffsetToDocument(contentInner, "left");
      const scrollTop = contentContainer.scrollTop;
      const scrollLeft = contentContainer.scrollLeft;
      const offsetY = e.pageY - topInner + scrollTop;
      const offsetX = e.pageX - leftInner + scrollLeft;

      const dayCell = document.querySelector(addFirstChar(CLASSNAMES.DAY_CELL, ".")) as HTMLDivElement;
      const dcBox = dayCell.getBoundingClientRect() as DOMRect;

      const colIdx = Math.floor(offsetX / dcBox.width);
      const lineIdx = Math.floor(offsetY / dcBox.height);
      const top = lineIdx * dcBox.height;
      let left = colIdx * dcBox.width;
      if (left < 0) {
        left = 0;
      }

      ghost.style.display = "unset";
      ghost.style.left = left + "px";
      ghost.style.top = top + "px";
      ghost.style.width = dcBox.width + "px";
      ghost.style.height = dcBox.height + "px";
      const seconds = lineIdx * context.duration + context.dayTime.start;
      ghost.innerHTML = TimeUtil.convertSecondsToHourString(seconds, context.timeFormat);
    });

    contentInner.addEventListener("mouseleave", function (e) {
      ghost.style.display = "none";
    });
    // eslint-disable-next-line
  }, []);

  return <div id={CLASSNAMES.GHOST} className={CLASSNAMES.GHOST}></div>;
};

export default GhostPresenter;
