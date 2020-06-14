import React, { Component } from "react";
import UserAvaPresenter from "./UserAva.presenter";
export declare module UserAvaContainerModule {
  export type Props = {};
  export type State = {};
  export type Presenter = {
    data: string & React.ReactNode;
  };
}
class UserAvaContainer extends Component<UserAvaContainerModule.Props, UserAvaContainerModule.State> {
  render() {
    return (
      <UserAvaPresenter
        data={"https://www.iconninja.com/files/445/434/573/man-user-person-male-profile-avatar-icon.png"}
      />
    );
  }
}

export default UserAvaContainer;
