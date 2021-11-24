import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TakePicturePage } from "../pages";
const MainRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/take-picture" element={<TakePicturePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
