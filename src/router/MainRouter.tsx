import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageResultPage from "../pages/ImageResultPage";
import CaptureImagePage from "../pages/CaptureImagePage";
import ImageUploadPage from "../pages/ImageUploadPage";
import ImagePage from "../pages/ImagePage";
const MainRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ImageUploadPage />} />
          <Route path="/result" element={<ImageResultPage />} />
          <Route path="/capture-image" element={<CaptureImagePage />} />
          <Route path="/image" element={<ImagePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
