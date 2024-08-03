import React from "react";
import { useNavigate } from "react-router-dom";

type CoverFormat = {
  type: string;
  url: string;
};

const VideoList = ({
    title = '',
    cover = [],
    slug ='',
    organization_name = '',
    date ='',
    created_at = '',
    updated_at = '',
} : {
    title: string
    cover: CoverFormat[]
    slug: string
    organization_name: string
    date: string
    created_at: string
    updated_at: string
}) => {
    const nav = useNavigate()
    const url = cover[0]?.url || "https://devkg.com/images/meetups/417c92a3f184b3cb5c7e204c63307248.webp"
    return(
      <div className="video--cards__card" onClick={() => nav('/videoDetail') }>
      <h1>
       {
        title
       }
      </h1>
      <div className="video--cards__card--titles">
        <div className="video--cards__card--titles__title">
          <h3>Организатор</h3>
          <h2>{organization_name}</h2>
        </div>
        <div className="video--cards__card--titles__title">
          <h3>Когда</h3>
          <h2>{date}</h2>
        </div>
      </div>
      <div className="video--cards__card--img"></div>
      <img
        src={url}
        alt="img"/>
    </div>
    )
}

export default VideoList;
