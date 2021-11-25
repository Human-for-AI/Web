import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import img from "../../assets/favicon.png";
import { imageState } from "../../recoil/image";
import { useCallback, useEffect } from "react";
import "./Image.scss";
import { postUploadImage } from "../../util/api";
let fileFormData = new FormData();
const Image = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useRecoilState<File | undefined>(
    imageState
  );

  let imageUrl: string | undefined = undefined;
  if (profileImage) imageUrl = URL.createObjectURL(profileImage);

  useEffect(() => {
    if (!profileImage) {
      navigate("/");
    }
  }, [profileImage]);

  const handleButton = () => {
    //postUploadImage() formData 보내기
    if (!profileImage) {
      alert("에러가 발생하였습니다.");
      return;
    }
    fileFormData.append("file", profileImage);
    postUploadImage(fileFormData);
    navigate("/result");
  };

  const handleBack = () => {
    setProfileImage(undefined);
  };

  return (
    <div className="image">
      <div className="image-content">
        {!imageUrl ? (
          <img src="" alt="다시 선택해주세요" />
        ) : (
          <img src={imageUrl} alt="image" />
        )}
      </div>
      <div className="image-button">
        <button
          onClick={handleBack}
          style={{ backgroundColor: "#E9E9E9", color: "#777575" }}
        >
          다시 선택
        </button>
        <button onClick={handleButton}>그림 읽기</button>
      </div>
    </div>
  );
};

export default Image;
