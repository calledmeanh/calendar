import React from "react";
import "./Label.style.scss";
import { LabelContainerModule } from "./Label.container";

const LabelPresenter: React.FC<Pick<LabelContainerModule.Props, "item">> = (props) => {
  return <div className="header-label">{props.item}</div>;
};
export default LabelPresenter;
