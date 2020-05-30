import React from "react";
import "./UserAva.style.scss";
import { UserAvaContainerModule } from "./UserAva.container";
const UserAvaPresenter: React.FC<UserAvaContainerModule.Presenter> = (props) => {
  return (
    <div className="user-ava">
      <img src={props.data} alt={"user-img"} />
    </div>
  );
};

export default UserAvaPresenter;
