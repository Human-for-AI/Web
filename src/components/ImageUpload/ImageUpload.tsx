import { useRecoilValue } from "recoil";
import { imageState } from "../../recoil/image";
import useImageInputBox from "../../hooks/useImageInputBox";
import icon from "../../assets/imageIcon.svg";
import "./ImageUpload.scss";

const ImageUpload = () => {
  const { isDragging, dragRef, onChangeFiles } = useImageInputBox();
  const profileImage = useRecoilValue<File | undefined>(imageState);

  let imageUrl: string | undefined = undefined;
  if (profileImage) imageUrl = URL.createObjectURL(profileImage);

  return (
    <div className="imageInputBox">
      <div className="imageInputBox-input">
        <div className="imageInputBox-input-view">
          {!imageUrl ? (
            // 추후 기본 사진으로 변경
            <img src={icon} alt="images" />
          ) : (
            <img src={imageUrl} alt="image" />
          )}
        </div>
        <div
          className={
            isDragging
              ? "imageInputBox-input-inputBox-dragging"
              : "imageInputBox-input-inputBox"
          }
          ref={dragRef}
        >
          <label className="imageInputBox-input-file" htmlFor="fileUpload">
            <img src={icon} alt="icon" />
            <div>이미지를 드래그하거나 파일을 선택해주세요</div>
            <input
              className="imageInputBox-input-btn"
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              accept="image/*"
              multiple={false}
              onChange={onChangeFiles}
            />
          </label>
        </div>
      </div>
      <div className="imageInputBox-button">
        <button style={{ backgroundColor: "#E9E9E9", color: "#777575" }}>
          사진 찍기
        </button>
        <button>그림 읽기</button>
      </div>
    </div>
  );
};

export default ImageUpload;
