import React from "react";
import { useNavigate } from "react-router-dom";


const VideoList = ({
    title = '',
    cover = '',
    slug ='',
    organization_name = '',
    date ='',
    created_at = '',
    updated_at = '',
} : {
    title: string
    cover: string
    slug: string
    organization_name: string
    date: string
    created_at: string
    updated_at: string
}) => {
    // {
    //     "id": 0,
    //     "title": "string",
    //     "cover": "string",
    //     "slug": "string",
    //     "date": "2024-07-29T12:10:47.622Z",
    //     "created_at": "2024-07-29T12:10:47.622Z",
    //     "updated_at": "2024-07-29T12:10:47.622Z",
    //     "gradient": 0,
    //     "organization_name": "string",
    //     "cover_formats": [
    //       {
    //         "type": "string",
    //         "url": "string"
    //       }
    //     ]
    //   }
    const nav = useNavigate()

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
        src="https://devkg.com/images/meetups/417c92a3f184b3cb5c7e204c63307248.webp"
        alt="img"/>
    </div>
    )
}

export default VideoList;
