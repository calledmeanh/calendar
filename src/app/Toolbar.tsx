import moment from "moment";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CONFIG, STYLES } from "../constants";
import { TTimeManipulate } from "../models";
import { TimeManiputeContext } from "./Calendar";
import { Button, Flex, Select, Option, Text } from "./common";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 48px;
  padding: 0 12px;
  border-bottom: 1px solid ${STYLES.BORDER_COLOR};
`;

function Toolbar() {
  const timeManiputeContext: TTimeManipulate = useContext(TimeManiputeContext);
  const isToday: boolean = timeManiputeContext.now === moment().format(CONFIG.DEFAULT_DATE_FOTMAT);
  const [mode, setMode] = useState("day");
  return (
    <Wrapper align={"center"} justify={"space-between"}>
      <Text size={[8, 12]}>Calendar</Text>
      <Flex align={"center"} justify={"center"}>
        <Button size={[8, 12]} onClick={(e) => timeManiputeContext.onPrev()}>
          &#x2039;
        </Button>
        <Button
          disabled={isToday}
          style={{ borderRight: "none", borderLeft: "none" }}
          size={[8, 12]}
          onClick={(e) => timeManiputeContext.onToday()}
        >
          Today
        </Button>
        <Text size={[8, 12]}>{timeManiputeContext.now}</Text>
        <Button style={{ borderLeft: "none" }} size={[8, 12]} onClick={(e) => timeManiputeContext.onNext()}>
          &#x203A;
        </Button>
      </Flex>
      <Select
        borderRadius
        value={mode}
        onChange={(e) => {
          const value: string = e.target.value;
          setMode(value);
        }}
      >
        <Option value="day">day</Option>
        <Option value="week">week</Option>
        <Option value="month">month</Option>
      </Select>
    </Wrapper>
  );
}

export default Toolbar;
