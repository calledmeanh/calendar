import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TTimeManipulate } from "../models";
import { DateUtils } from "../utils/date";
import { TimeManiputeContext } from "./Calendar";
import { Button, Flex, Select, Option, Text } from "./common";

const Wrapper = styled(Flex)`
  width: 100%;
  height: 68px;
  padding: 16px 24px;
`;

function Toolbar() {
  const timeManiputeContext: TTimeManipulate = useContext(TimeManiputeContext);
  const isToday: boolean = DateUtils.isToday(timeManiputeContext.now);

  const [mode, setMode] = useState("day");
  return (
    <Wrapper data-idtf={"toolbar"} align={"center"} justify={"space-between"}>
      <Text data-idtf={"label"} size={[8, 12]}>
        Calendar
      </Text>
      <Flex data-idtf={"daytime"} align={"center"} justify={"center"}>
        <Button size={[9, 12]} onClick={(e) => timeManiputeContext.onPrev()}>
          &#x2039;
        </Button>
        <Button
          disabled={isToday}
          style={{ borderRight: "none", borderLeft: "none" }}
          size={[9, 12]}
          onClick={(e) => timeManiputeContext.onToday()}
        >
          Today
        </Button>
        <Text size={[8, 12]}>{timeManiputeContext.now}</Text>
        <Button size={[9, 12]} style={{ borderLeft: "none" }} onClick={(e) => timeManiputeContext.onNext()}>
          &#x203A;
        </Button>
      </Flex>
      <Select
        data-idtf={"mode"}
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
