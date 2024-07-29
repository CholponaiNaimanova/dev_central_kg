import React from "react";

const VideoList = () => {
  return (
    <>
      <div id="videoDetialTitle">
        <div
          className="videoDetialTitle--img"
          style={{
            background: `url('https://devkg.com/images/meetups/d37f3db23b3182ce2b9aa2490d383c5e.webp') no-repeat center/cover`,
          }}
        ></div>
        <div className="container videoDetail">
          <div className="videoDetialTitle">
            <h1>
              ChatGPT — революция или мода? Как нейросети могут помочь в работе
            </h1>
            <div className="videoDetialTitle--date">
              <div className="videoDetialTitle--date__block">
                <h4>Когда</h4>
                <h3>12 сентября 2023</h3>
              </div>
              <div className="videoDetialTitle--date__block">
                <h4>Организатор</h4>
                <h3>Kolesa Group</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="video-content">
        <div className="container">
          <div className="video-content">
            <iframe
              width="100%"
              height="585"
              src="https://www.youtube.com/embed/C2ICic8y5D8"
              title="ChatGPT — революция или мода? Как нейросети могут помочь в работе. Kolesa Podcast"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
      <div id="video-down">
        <div className="container">
          <div className="video-down">
            <button>Перейти на YouTube</button>
            <div className="video-down--text">
              <p>
                Завершаем пятый сезон нашумевшей темой про генеративные модели.
                Что обсуждали:
              </p>
              <p>
                - как правильно применять ChatGPT в своей работе <br /> -
                влияние широкого распространения нейросетей <br />- бизнес-риски
                применения искусственного интеллекта
              </p>
              <p>
                В гостях были: <br />· Хамбар Дусалиев — Head of ML & Operations at
                Kolesa Group <br /> · Камалхан Артыкбаев — Lead Computer vision
                Engineer at Parqour
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoList;