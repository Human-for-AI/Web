import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import RootRouter from "./router";

function App() {
  return (
    <>
      <RecoilRoot>
        <RootRouter />
      </RecoilRoot>
    </>
  );
}

export default App;
