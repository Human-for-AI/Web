import React, { useState } from "react";
import "./styles.scss";
import { CameraIcon, BackPage } from "../../assets";
import { useNavigate } from "react-router";
import Webcam from "react-webcam";
const CaptureImage = (): JSX.Element => {
  const navigate = useNavigate();
  // webcam
  const webcamRef = React.useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<any>(null);
  const capture = () => {
    if (webcamRef !== null && webcamRef.current !== null) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      alert("사진이 찍혔습니다.");
      navigate("/image");
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.keyCode === 32) {
        capture();
      }
    });
  });
  // 페이지 이동
  const goBackPage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={"goBackPage"} onClick={goBackPage}>
        <img src={BackPage} alt="" />
        <span>사진 선택하기</span>
      </div>
      <div id={"container"}>
        <div id={"cameraScreen"}>
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
            mirrored={true}
            forceScreenshotSourceSize={true}
            width={100 + "%"}
            height={100 + "%"}
            style={{ borderRadius: "40px 40px 0 0" }}
          />
        </div>
        <div id={"filmingBtn"} onClick={capture}>
          <img src={CameraIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CaptureImage;
