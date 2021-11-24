import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TakePicturePage from "../pages/TakePicturePage";
import ImageUploadPage from "../pages/ImageUploadPage";
const MainRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/take-picture" element={<TakePicturePage />} />
          <Route path="/" element={<ImageUploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
