import React, { Component } from "react";
import ContentPresenter from "./Content.presenter";

export declare module ContentContainerModule {
  export type Props = {};
  export type State = {};
}

class ContentContainer extends Component<ContentContainerModule.Props, ContentContainerModule.State> {
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
    const eventGroups = document.querySelectorAll(".event-group");
    const ghost = document.getElementById("ghost") as HTMLDivElement;

    eventGroups.forEach((child) => {
      child.addEventListener("mousemove", function (e: any) {
        const contentContainer = document.querySelector(".content") as HTMLDivElement;
        const contentInner = document.querySelector(".content-inner") as HTMLDivElement;
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
      });
    });
  }
  render() {
    return <ContentPresenter />;
  }
}

export default ContentContainer;
