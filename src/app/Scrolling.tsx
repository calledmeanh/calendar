import React from "react";
import styled from "styled-components";
import Swipable from "./Swipable";
import Time from "./Time";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
`;

function Scrolling() {
  return (
    <Wrapper data-idtf={"scrolling"}>
      <Time />
      <Swipable />
    </Wrapper>
  );
}

export default Scrolling;
