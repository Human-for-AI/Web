import React, { useEffect, useState } from "react";
import "./styles.scss";
import { CameraIcon, BackPage } from "../../assets";
import { useNavigate } from "react-router";
import Webcam from "react-webcam";

const CaptureImage = (): JSX.Element => {
  const webcamRef = React.useRef<any>(null);
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const capture = React.useCallback(() => {
    if (webcamRef !== null && webcamRef.current !== null) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      const captureAfter3s = () => {
        alert("사진이 찍혔습니다.");
        navigate("/result");
      };
      setInterval(captureAfter3s, 3000);
    }
  }, [webcamRef, navigate]);

  useEffect(() => {
    console.log(imgSrc);
  }, [imgSrc]);

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
