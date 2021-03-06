import styled from "styled-components";
import { STYLES } from "../../constants";
import { Flex } from "./Flex";

export const Line = styled(Flex)`
  flex-grow: 1;
  flex-shrink: 0;
  height: 24px;
  color: ${STYLES.COLOR};
  font-size: ${STYLES.FONT_SIZE};
  line-height: ${STYLES.FONT_SIZE};
  font-weight: 500;
  border-top: 1px solid #eef0f2;
  &.wt {
    background-color: #fff;
  }
  &.gt {
    border-top: 1px solid #dee3e7;
  }
  &.ngt {
    border-top: none;
  }
`;

/* 
    wt = working time
    gt = group time
    ngt = no group time
 */
