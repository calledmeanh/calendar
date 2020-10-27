import styled from "styled-components";
import { STYLES } from "../../constants";

type TText = {
  size: [number, number];
  borderRadius?: boolean;
};

export const Text = styled.div`
  padding: ${(props: TText) => `${props.size[0]}px ${props.size[1]}px`};
  border-radius: ${(props: TText) => (props.borderRadius ? `${STYLES.BORDER_RADIUS}` : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid ${STYLES.BORDER_COLOR};
  color: ${STYLES.COLOR};
  user-select: none;
`;
