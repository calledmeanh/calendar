import React from "react";
import styled from "styled-components";
import Scrolling from "./Scrolling";
import { Box } from "./common";

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  position: relative;
`;

function Content() {
  return (
    <Wrapper data-idtf={"content"}>
      <Box data-idtf={"box"} pos={[0, 0]} />
      <Scrolling />
    </Wrapper>
  );
}

export default Content;
