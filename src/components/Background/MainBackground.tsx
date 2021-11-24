import React from "react";
import "./styles.scss";

type PropType = {
  children: React.ReactNode;
};
const MainBackground = ({ children }: PropType): JSX.Element => {
  return <div id={"Main"}>{children}</div>;
};

export default MainBackground;
