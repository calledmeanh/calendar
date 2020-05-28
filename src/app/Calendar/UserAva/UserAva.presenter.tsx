import React from "react";
import "./UserAva.style.scss";
import { UserAvaContainerModule } from "./UserAva.container";
export const UserAvaPresenter: React.FC<UserAvaContainerModule.Presenter> = (props) => {
  return (
    <div className="user-ava">
      <img src={props.data} alt={"user-img"} />
    </div>
  );
};
