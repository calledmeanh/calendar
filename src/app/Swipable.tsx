import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Timeline from "./Timeline";

const Wrapper = styled.div`
  flex: 1;
  height: max-content;
`;

function Swipable() {
  return (
    <Wrapper data-idtf={"swipable"}>
      <Timeline />
      <Grid />
    </Wrapper>
  );
}

export default Swipable;
