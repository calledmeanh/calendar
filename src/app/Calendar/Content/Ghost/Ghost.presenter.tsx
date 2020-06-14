import React, { useEffect, useContext } from "react";
import { TimeService } from "../../../../services";
import { CalendarContext } from "../../../../constants";
import { getOffsetToDocument } from "../../../../utils";

import "./Ghost.style.scss";

const GhostPresenter: React.FC = () => {
  const context = useContext(CalendarContext);

  useEffect(() => {
    const contentInner = document.querySelector(".content-inner") as HTMLDivElement;
    const ghost = document.getElementById("ghost") as HTMLDivElement;

    contentInner.addEventListener("mousemove", function (e: any) {
      const contentContainer = document.querySelector(".content") as HTMLDivElement;
      const topInner = getOffsetToDocument(contentInner, "top");
      const leftInner = getOffsetToDocument(contentInner, "left");
      const scrollTop = contentContainer.scrollTop;
      const scrollLeft = contentContainer.scrollLeft;
      const offsetY = e.pageY - topInner + scrollTop;
      const offsetX = e.pageX - leftInner + scrollLeft;

      const dayCell = document.querySelector(".day-cell");
      const dcBox = dayCell?.getBoundingClientRect() as DOMRect;

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
      ghost.innerHTML = TimeService.convertSecondsToHourString(seconds, context.timeFormat);
    });

    contentInner.addEventListener("mouseleave", function () {
      ghost.style.display = "none";
    });
    // eslint-disable-next-line
  }, []);

  return <div id="ghost" className="ghost"></div>;
};

export default GhostPresenter;
