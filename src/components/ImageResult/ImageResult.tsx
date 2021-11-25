import { useEffect } from 'react';
import './ImageResult.scss'

const ImageResult = () => {
  const imageUrl = "https://cdn.discordapp.com/attachments/627298658177515541/904991111796379728/unknown.png";

  const recent = [
    {
      imageUrl: imageUrl,
      title: "성공"
    },
    {
      imageUrl: imageUrl,
      title: "abc"
    },
    {
      imageUrl: imageUrl,
      title: "abc"
    }
  ];

  useEffect(() => {
    speak("이것은 " + recent[0].title + "입니다.", "ko-KR");
  }, []);

  const speak = (text: string, language: string) => {
    if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
      alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
      return;
    }

    window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1;
    speechMsg.pitch = 1.2;
    speechMsg.lang = language || "ko-KR";
    speechMsg.text = text;

    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
  }

  return <>
    <div className='listItem'>
      {recent.map((e, i) => {
        return <>
          <div className='result'>
            <div className='result-image'>
              <img src={e.imageUrl} alt="" />
            </div>
            <div className='result-content'>
              {/* <div className='result-content-title'>이것은 사과 입니다</div> */}
              <h1 className='result-content-title'>이것은
                <span>{` ${e.title} `}</span>
                입니다</h1>
              <div className='result-content-text'>
                <span className='result-content-text-item'>{'설명'}</span>
              </div>
              {i === 0 ? <button>이전으로</button> : null}
            </div>
          </div>
        </>
      })}
    </div>
  </>;
};

export default ImageResult;
