import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaptureImagePage from "../pages/CaptureImagePage";
const MainRouter: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/capture-image" element={<CaptureImagePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainRouter;
