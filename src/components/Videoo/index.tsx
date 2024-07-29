import React from "react";
import { useNavigate } from "react-router-dom";

const Videoo = () => {
  const nav = useNavigate()
  return (
    <div id="video">
      <div className="container">
        <div className="video">
          <div className="video--btn">
            <button>Добавить видео</button>
          </div>
          <h2>Все видео</h2>
          <div className="video--cards">
            <div className="video--cards__card" onClick={() => nav('/videoDetail') }>
              <h1>
                Кибирд (Keybeard) #43 – Синдром самозванца в IT 2023 (feat.
                Даниил Вартанов)
              </h1>
              <div className="video--cards__card--titles">
                <div className="video--cards__card--titles__title">
                  <h3>Организатор</h3>
                  <h2>Mad Devs</h2>
                </div>
                <div className="video--cards__card--titles__title">
                  <h3>Когда</h3>
                  <h2>30 августа 2023</h2>
                </div>
              </div>
              <div className="video--cards__card--img"></div>
              <img
                src="https://devkg.com/images/meetups/417c92a3f184b3cb5c7e204c63307248.webp"
                alt="img"/>
            </div>
            <div className="video--cards__card" onClick={() => nav('/videoDetail') }>
              <h1>
              ChatGPT — революция или мода? Как нейросети могут помочь в работе
              </h1>
              <div className="video--cards__card--titles">
                <div className="video--cards__card--titles__title">
                  <h3>Организатор</h3>
                  <h2>Kolesa Group</h2>
                </div>
                <div className="video--cards__card--titles__title">
                  <h3>Когда</h3>
                  <h2>12 сентября 2023</h2>
                </div>
              </div>
              <div className="video--cards__card--img"></div>
              <img
                src="https://devkg.com/images/meetups/d37f3db23b3182ce2b9aa2490d383c5e.webp"
                alt="img"
              />
            </div>
            <div className="video--cards__card" onClick={() => nav('/videoDetail') }>
              <h1>
                Кибирд (Keybeard) #43 – Синдром самозванца в IT 2023 (feat.
                Даниил Вартанов)
              </h1>
              <div className="video--cards__card--titles">
                <div className="video--cards__card--titles__title">
                  <h3>Организатор</h3>
                  <h2>Mad Devs</h2>
                </div>
                <div className="video--cards__card--titles__title">
                  <h3>Когда</h3>
                  <h2>30 августа 2023</h2>
                </div>
              </div>
              <div className="video--cards__card--img"></div>
              <img
                src="https://devkg.com/images/meetups/417c92a3f184b3cb5c7e204c63307248.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videoo;