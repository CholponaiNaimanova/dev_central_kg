import React from "react";
import useFetch from "../../hooks/useFetch";
import SoobshestvoList from "./Soobshestvo";

function Soobshestvo() {
  const { data, loading } = useFetch();
  
  if (loading || !data) {
    return <div>Загрузка...</div>;
  } 

  
  return ( 
    <div id="soo">
      <div className="container">
        <div className="soo">
          <div className="soo-text">
            <h1>Если хотите добавить что либо или удалить, отправьте Pull Request или создайте Issue в репозитории.</h1>
            <button>Перейти</button>
          </div>
          {data && data.map((community: any, index: number) => (
            <SoobshestvoList
              key={index}
              devkg={community.devkg}
              telegram_chats={community.telegram_chats}
              websites={community.websites}
              facebook={community.facebook}
              youtube={community.youtube}
              github={community.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Soobshestvo;
