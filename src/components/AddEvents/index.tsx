import React from "react";


function AddEvents() {
    
    return(
        <div className="event">
            <div className="events">
                <h1>Добавить новое мероприятие</h1>
                <p>Мероприятие будет опубликовано на сайте и в телеграм канале после проверки модератором. Мероприятия откровенно рекламного характера или не связанные с IT и <br /> смежными темами будут отклоненны.</p>

                <div className="">
                    <h1>Изображение</h1>
                <form>
                   <input type="file" id="fileInput" accept="image/*"/>
                </form>
                </div>  
            </div>
        </div>
    )
}

export default AddEvents;