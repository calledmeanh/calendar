import React, { Component } from "react";
import ContentPresenter from "./Content.presenter";

export declare module ContentContainerModule {
  export type Props = {};
  export type State = {};
}

class ContentContainer extends Component<ContentContainerModule.Props, ContentContainerModule.State> {
  componentDidMount() {
    const eventGroups = document.querySelectorAll(".event-group");
    const ghost = document.getElementById("ghost") as HTMLDivElement;

    eventGroups.forEach((child) => {
      child.addEventListener("mousemove", function (e: any) {
        console.log(e.target);


        const dayCell = document.querySelector(".day-cell");
        const dcBox = dayCell?.getBoundingClientRect() as DOMRect;

        const eg = e.target;
        const egId = eg.dataset.eventGroupId;
        const egIdNum = parseInt(egId);

        const lineIdx = Math.floor(e.offsetY / dcBox.height);
        const top = lineIdx * dcBox.height;
        const left = egIdNum * dcBox.width;
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
