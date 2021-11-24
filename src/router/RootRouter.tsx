import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
const RootRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩중...</div>}>
        <MainRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
