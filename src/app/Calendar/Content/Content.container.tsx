import React, { Component } from "react";
import ContentPresenter from "./Content.presenter";
import { CalendarContext } from "../../../constants";
import { TimeService } from "../../../services";

export declare module ContentContainerModule {
  export type Props = {};
  export type State = {};
}

class ContentContainer extends Component<ContentContainerModule.Props, ContentContainerModule.State> {
  static contextType = CalendarContext;
  getOffset = (elem: any, dir: "left" | "top") => {
    const offset = dir === "left" ? "offsetLeft" : "offsetTop";
    let offsetLeft = 0;
    do {
      if (!isNaN(elem[offset])) {
        offsetLeft += elem[offset];
      }
    } while ((elem = elem.offsetParent));
    return offsetLeft;
  };

  componentDidMount() {
    const self = this;
    const contentInner = document.querySelector(".content-inner") as HTMLDivElement;
    const ghost = document.getElementById("ghost") as HTMLDivElement;

    contentInner.addEventListener("mousemove", function (e: any) {
      const contentContainer = document.querySelector(".content") as HTMLDivElement;
      const topInner = self.getOffset(contentInner, "top");
      const leftInner = self.getOffset(contentInner, "left");
      const scrollTop = contentContainer.scrollTop;
      const scrollLeft = contentContainer.scrollLeft;
      const offsetY = e.pageY - topInner + scrollTop;
      const offsetX = e.pageX - leftInner + scrollLeft;

      const dayCell = document.querySelector(".day-cell");
      const dcBox = dayCell?.getBoundingClientRect() as DOMRect;

      const colIdx = Math.floor(offsetX / dcBox.width);
      const lineIdx = Math.floor(offsetY / dcBox.height);
      const top = lineIdx * dcBox.height;
      const left = colIdx * dcBox.width;
      ghost.style.left = left + "px";
      ghost.style.top = top + "px";
      ghost.style.width = dcBox.width + "px";
      ghost.style.height = dcBox.height + "px";
      const seconds = lineIdx * self.context.duration + self.context.dayTime.start;
      ghost.innerHTML = TimeService.convertSecondsToHourString(seconds, self.context.timeFormat);
    });
  }
  render() {
    return <ContentPresenter />;
  }
}

export default ContentContainer;
