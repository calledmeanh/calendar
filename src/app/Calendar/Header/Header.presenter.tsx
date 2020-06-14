import React, { useContext } from "react";
import "./Header.style.scss";
import Label from "./Label";
import Week from "../Week";
import { CalendarContext, CLASSNAMES } from "../../../constants";

const HeaderPresenter: React.FC = (props) => {
  const context = useContext(CalendarContext);
  return (
    <div className={CLASSNAMES.HEADER}>
      <Label item={context.label} width={"8.8rem"} />
      <Week />
    </div>
  );
};

export default HeaderPresenter;
