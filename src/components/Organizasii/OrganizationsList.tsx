import React from "react";
import { useNavigate } from "react-router-dom";

type IconFormat = {
    type: string;
    url: string;
  };

const OrganizationsList = ({
    name = '', 
    events_count = 0,
    jobs_count = 0,
    meetups_count = 0,
    icon_formats = []
} : {
    name: string
    events_count:number
    jobs_count:number
    meetups_count: number
    icon_formats: IconFormat[]
}) => {
  const url = icon_formats[0]?.url || "https://devkg.com/images/organizations/88ba3e55ab38d5fe5c710cb8aede1e6f.webp"
  const nav = useNavigate();
    return (
        <div className="organizasii--cards">
            <div className="organizasii--cards__card">
              <div className="organizasii--cards__card--title">
                <img
                  src={url}
                  alt="img"
                />
                <div className="organizasii--cards__card--title__company">
                  <h3>Компания</h3>
                  <h2 onClick={() => nav("/detailO")}>{name}</h2>
                </div>
              </div>
              <div className="organizasii--cards__card--about">
                <div className="organizasii--cards__card--about__block">
                  <h3>Вакансии</h3>
                  <h2>{jobs_count}</h2>
                </div>
                <div className="organizasii--cards__card--about__block">
                  <h3>Мероприятия</h3>
                  <h2>{events_count}</h2>
                </div>
                <div className="organizasii--cards__card--about__block">
                  <h3>Видео</h3>
                  <h2>{meetups_count}</h2>
                </div>
              </div>
            </div>
          </div>
    )
}

export default OrganizationsList
