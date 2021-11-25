import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TakePicturePage } from "../pages";
import { ImageResultPage } from "../pages";
const MainRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/take-picture" element={<TakePicturePage />} />
          <Route path="/result" element={<ImageResultPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
