import React from "react";
import "./Day.style.scss";
import { DayContainerModule } from "./Day.container";
import { CLASSNAMES } from "../../../constants";

const DayPresenter: React.FC<DayContainerModule.Props> = (props) => {
  const { data } = props;
  return <div className={CLASSNAMES.DAY}>{data}</div>;
};

export default DayPresenter;
