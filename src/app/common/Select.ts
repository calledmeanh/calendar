import styled from "styled-components";
import { STYLES } from "../../constants";

type TSelect = {
  borderRadius?: boolean;
};

export const Select = styled.select`
  border-radius: ${(props: TSelect) => (props.borderRadius ? `${STYLES.BORDER_RADIUS}` : 0)};
  border: 1px solid ${STYLES.BORDER_COLOR};
  padding: 8px 12px;
  outline: none;
  background: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: ${STYLES.TRANSITION};
  &:hover {
    box-shadow: 0 2px 10px 0 rgba(16, 25, 40, 0.2);
  }
  &:active {
    box-shadow: none;
  }
`;

export const Option = styled.option``;
