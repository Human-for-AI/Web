import { useNavigate } from "react-router-dom";
import img from "../../assets/favicon.png";
import "./Image.scss";

const Image = () => {
  const navigate = useNavigate();

  const handleButton = (url: string) => {
    navigate(url);
  };

  return (
    <div className="image">
      <div className="image-content">
        <img src={img} alt="img" />
      </div>
      <div className="image-button">
        <button
          onClick={() => handleButton("/")}
          style={{ backgroundColor: "#E9E9E9", color: "#777575" }}
        >
          다시 선택
        </button>
        <button onClick={() => handleButton("/result")}>그림 읽기</button>
      </div>
    </div>
  );
};

export default Image;
