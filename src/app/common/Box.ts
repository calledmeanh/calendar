import styled from "styled-components";
import { STYLES } from "../../constants";

type TBox = {
  pos: [number, number]; // top, left
};

/**
 * to hide something, use it
 */
export const Box = styled.div`
  width: 48px;
  height: 60px;
  position: absolute;
  top: ${(props: TBox) => props.pos[0] || 0}px;
  left: ${(props: TBox) => props.pos[1] || 0}px;
  background: ${STYLES.BACKGROUND};
  z-index: 1;
`;
