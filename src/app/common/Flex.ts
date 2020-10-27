import styled from "styled-components";

type TFlex = {
  direction?: "row" | "column";
  justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "initial" | "inherit";
  align: "stretch" | "center" | "flex-start" | "flex-end" | "baseline" | "initial" | "inherit";
};

export const Flex = styled.div`
  width: inherit;
  display: flex;
  flex-direction: ${(props: TFlex) => props.direction || "row"};
  justify-content: ${(props: TFlex) => props.justify};
  align-items: ${(props: TFlex) => props.align};
`;
