import React from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import VideoList from "./VideoList";

const Videoo = () => {

  const { data, loading } = useFetch({url:'http://3.38.98.134/meetups'});
  console.log(data);
  
    if (loading || !data) {
      return <div>Загрузка...</div>;
    }
  return (
    <div id="video">
      <div className="container">
        <div className="video">
        <div className="video--btn">
            <button>Добавить видео</button>
          </div>
          <h2>Все видео</h2>
        <div className="video--cards">
          { data && data.map((meetups: any, index: number) => {
            return (
              <VideoList
               key={index}
               title={meetups.title}
               organization_name={meetups.organization_name}
               date={meetups.date}
               created_at={meetups.created_at}
               updated_at={meetups.updated_at}
               cover={meetups.cover_formats}
               slug={meetups.slug}
              />
            )
          })

        }
        </div>
        </div>
      </div>
    </div>
  );
};

export default Videoo;