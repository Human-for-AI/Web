import React from "react";
import "./styles.scss";

type PropType = {
  children: React.ReactNode;
};
const ResultBackground = ({ children }: PropType): JSX.Element => {
  return <div id={"Result"}>
    {children}
  </div>;
};

export default ResultBackground;
