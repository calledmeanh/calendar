import React, { useState, useEffect } from "react";
import "./ContentView.style.scss";
import Column from "./components/Column";
import $ from "jquery";

declare module ContentViewModule {
  export type Props = {};
}

const ContentViewPresenter: React.FC<ContentViewModule.Props> = (props) => {
  const calendarMode: number = 7;
  const numOfColsThreshold = calendarMode / 2;
  const cols = new Array(calendarMode * 3).fill(0);
  const [colWidth, setColWidth] = useState<number>(0);

  const _calcColWidth = (numOfCols: number) => {
    const container = $(".content-view");
    const containerWidth = container.outerWidth() as number;
    const width = containerWidth / numOfCols;
    return width;
  };

  useEffect(() => {
    const contentView = $(".content-view");
    const timeColumn = $(".time-column");
    const contentViewCols = $(".content-view__col");

    setTimeout(() => {
      const defaultScrollLeft = contentViewCols[calendarMode].offsetLeft as number;
      contentView.animate({ scrollLeft: defaultScrollLeft });
    });

    contentView.scroll((evt) => {
      const contentViewTop = contentView.scrollTop() as number;
      timeColumn.scrollTop(contentViewTop);
    });

    let allowMove = false;
    let startX = 0;
    let scrollLeft = 0;
    let scrollbarPos = 0;
    let walkX = 0;
    contentView
      .mousedown(function (this, e) {
        allowMove = true;
        startX = e.pageX - this.offsetLeft;
        scrollLeft = this.scrollLeft;
      })
      .mousemove(function (this, e) {
        if (allowMove) {
          const x = e.pageX - this.offsetLeft;
          walkX = (x - startX) * 0.75;
          scrollbarPos = scrollLeft - walkX;

          this.scrollLeft = scrollbarPos;
        }
      })
      .mouseleave(mouseEnd)
      .mouseup(mouseEnd);

    function mouseEnd(this: any, e: any) {
      allowMove = false;
      const colWidth = contentViewCols.outerWidth() as number;

      if (walkX < 0 && Math.abs(walkX) >= colWidth * numOfColsThreshold) {
        $(this).animate({ scrollLeft: contentViewCols[calendarMode * 2].offsetLeft });
        return;
      }

      if (walkX > 0 && walkX >= colWidth * numOfColsThreshold) {
        $(this).animate({ scrollLeft: 0 });
        return;
      }

      const scrollLeft = this.scrollLeft + walkX;
      $(this).animate({ scrollLeft });
    }
  }, []);

  useEffect(() => {
    const width = _calcColWidth(calendarMode);

    setColWidth(width);
  }, [calendarMode]);

  return (
    <div className="content-view">
      {cols.map((c, index) => {
        return <Column key={index} width={colWidth} headerData={`col-${index}`} />;
      })}
    </div>
  );
};

export default ContentViewPresenter;
