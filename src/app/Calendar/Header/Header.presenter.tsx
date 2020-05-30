import React from "react";
import "./Header.style.scss";
import Label from "./Label";
import Week from "../Week";

const HeaderPresenter: React.FC = (props) => {
  return (
    <div className="header">
      <Label width={"8.8rem"} />
      <Week />
    </div>
  );
};

export default HeaderPresenter;
