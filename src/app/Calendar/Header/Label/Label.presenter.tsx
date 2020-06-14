import React from "react";
import "./Label.style.scss";
import { LabelContainerModule } from "./Label.container";
import { CLASSNAMES } from "../../../../constants";

const LabelPresenter: React.FC<Pick<LabelContainerModule.Props, "item">> = (props) => {
  return <div className={CLASSNAMES.HEADER_LABEL}>{props.item}</div>;
};
export default LabelPresenter;
