import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { imageState } from "../../recoil/image";
import useImageInputBox from "../../hooks/useImageInputBox";
import icon from "../../assets/imageIcon.svg";
import "./ImageUpload.scss";

const ImageUpload = () => {
  const profileImage = useRecoilValue<File | undefined>(imageState);

  const { isDragging, dragRef, onChangeFiles } = useImageInputBox();
  const navigate = useNavigate();

  useEffect(() => {
    if (profileImage) {
      navigate("/image");
    }
  }, [profileImage]);

  const handleButton = () => {
    navigate("/capture-image");
  };

  return (
    <div className="imageInputBox">
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
