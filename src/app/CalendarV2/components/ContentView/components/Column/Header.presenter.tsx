import React from "react";

declare module HeaderModule {
  export type Props = {
    data: any;
  };
}

const HeaderPresenter: React.FC<HeaderModule.Props> = (props) => {
  return <div className="content-view__col__header">{props.data}</div>;
};

export default HeaderPresenter;
