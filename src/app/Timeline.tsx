import moment from "moment";
import React from "react";
import styled from "styled-components";
import { CONFIG, STYLES } from "../constants";
import clsx from "../utils/clsx";
import { DateUtils } from "../utils/date";
import { Flex } from "./common";

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 52;
  background: ${STYLES.BACKGROUND};
`;

const TimelineHeader = styled(Flex)`
  flex: 1;
  padding: 10px;
  background: transparent;
  font-weight: 500;
  cursor: pointer;
  transition: ${STYLES.TRANSITION};
  &:hover {
    background: #fff;
    box-shadow: 0 3px 5px 0 rgba(164, 173, 186, 0.25);
  }
  &:active {
    box-shadow: none;
  }
`;

const TimelineNumber = styled.div`
  font-size: 26px;
  margin-right: 6px;
  color: #67768c;
  &.today {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 50%;
    background: #037aff;
    color: #fff;
  }
`;

const TimelineText = styled.div`
  font-size: ${STYLES.FONT_SIZE};
  color: #67768c;
  &.today {
    color: #037aff;
  }
`;

function Timeline(props: any) {
  return (
    <Wrapper data-idtf={"timeline"}>
      {DateUtils.getWeek().map((week, i) => {
        const today: string = moment(week.origin).format(CONFIG.DEFAULT_DATE_FOTMAT);
        const isToday: boolean = DateUtils.isToday(today);
        const classname = clsx({
          today: isToday,
        });
        return (
          <TimelineHeader key={i} justify={"center"} align={"center"}>
            <TimelineNumber className={classname}>{week.number}</TimelineNumber>
            <TimelineText className={classname}>{week.text}</TimelineText>
          </TimelineHeader>
        );
      })}
    </Wrapper>
  );
}

export default Timeline;
