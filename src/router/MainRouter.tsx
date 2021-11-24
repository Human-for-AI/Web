import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainBackground } from "../components";
const MainRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<MainBackground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
