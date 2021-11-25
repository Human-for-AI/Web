import React from "react";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import Webcam from "react-webcam";
import { CameraIcon, BackPage } from "../../assets";
import { imageUrlState } from "../../recoil/image";
import "./styles.scss";

const CaptureImage = (): JSX.Element => {
  const navigate = useNavigate();
  // webcam
  const webcamRef = React.useRef<Webcam>(null);
  const setImgUrl = useSetRecoilState<any>(imageUrlState);
  const capture = () => {
    if (webcamRef !== null && webcamRef.current !== null) {
      const imageSrc = webcamRef.current.getScreenshot();

      //audio.play();
      const captureAfter3s = () => {
        setImgUrl(imageSrc);
        alert("사진이 찍혔습니다.");
        navigate("/image");
      };
      setTimeout(captureAfter3s, 10);
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
