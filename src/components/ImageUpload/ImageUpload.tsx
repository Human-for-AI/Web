import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { imageState } from "../../recoil/image";
import useImageInputBox from "../../hooks/useImageInputBox";
import icon from "../../assets/imageIcon.svg";
import "./ImageUpload.scss";

const ImageUpload = () => {
  const { isDragging, dragRef, onChangeFiles } = useImageInputBox();

  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/take-picture");
  };
  // const profileImage = useRecoilValue<File | undefined>(imageState);

  // let imageUrl: string | undefined = undefined;
  // if (profileImage) imageUrl = URL.createObjectURL(profileImage);

  return (
    <div className="imageInputBox">
      {/* 이미지 띄워주는 화면으로 이동 예정
      <div className="imageInputBox-input-view">
          {!imageUrl ? (
            // 추후 기본 사진으로 변경
            <img src={icon} alt="images" />
          ) : (
            <img src={imageUrl} alt="image" />
          )}
        </div> */}
      <div
        className={
          isDragging
            ? "imageInputBox-inputBox-dragging"
            : "imageInputBox-inputBox"
        }
        ref={dragRef}
      >
        <label className="imageInputBox-file" htmlFor="fileUpload">
          <img src={icon} alt="icon" />
          <div>이미지를 드래그하거나 파일을 선택해주세요</div>
          <input
            className="imageInputBox-btn"
            type="file"
            id="fileUpload"
            style={{ display: "none" }}
            accept="image/*"
            multiple={false}
            onChange={onChangeFiles}
          />
        </label>
      </div>
      <button onClick={handleButton}>사진 찍기</button>
    </div>
  );
};

export default ImageUpload;
