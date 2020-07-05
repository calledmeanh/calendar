import React from "react";

declare module LineModule {
  export type Props = {
    data: any;
  };
}

const LinePresenter: React.FC<LineModule.Props> = (props) => {
  return <div className="content-view__col__line"></div>;
};

export default LinePresenter;
