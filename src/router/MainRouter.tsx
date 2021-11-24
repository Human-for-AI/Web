import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const MainRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <div></div>
          <Route element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
