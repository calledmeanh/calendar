import styled from "styled-components";
import { STYLES } from "../../constants";

type TButton = {
  size: [number, number];
  borderRadius?: boolean;
  color?: string;
};

export const Button = styled.button`
  padding: ${(props: TButton) => `${props.size[0]}px ${props.size[1]}px`};
  border-radius: ${(props: TButton) => (props.borderRadius ? `${STYLES.BORDER_RADIUS}` : 0)};
  outline: none;
  border: 1px solid ${STYLES.BORDER_COLOR};
  background: #fff;
  color: ${(props: TButton) => props.color || STYLES.COLOR};
  cursor: pointer;
  font-size: ${STYLES.FONT_SIZE};
  transition: ${STYLES.TRANSITION};
  &:hover {
    box-shadow: 0 2px 10px 0 rgba(16, 25, 40, 0.2);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background: ${STYLES.DISABLE_COLOR};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
