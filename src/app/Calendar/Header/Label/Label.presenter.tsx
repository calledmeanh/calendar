import React from "react";
import "./Label.style.scss";
import { LabelContainerModule } from "./Label.container";

export const LabelPresenter: React.FC<LabelContainerModule.Presenter> = (props) => {
  return <div className="header-label">{props.item}</div>;
};
