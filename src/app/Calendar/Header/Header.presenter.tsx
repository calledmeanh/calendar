import React, { useContext } from "react";
import "./Header.style.scss";
import Label from "./Label";
import Week from "../Week";
import { CalendarContext } from "../../../constants";

const HeaderPresenter: React.FC = (props) => {
  const context = useContext(CalendarContext);
  return (
    <div className="header">
      <Label item={context.label} width={"8.8rem"} />
      <Week />
    </div>
  );
};

export default HeaderPresenter;
