import './ImageResult.scss'

const ImageResult = () => {
  const imageUrl = "https://cdn.discordapp.com/attachments/627298658177515541/904991111796379728/unknown.png";

  const recent = [
    {
      imageUrl: imageUrl,
      title: "abc"
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
