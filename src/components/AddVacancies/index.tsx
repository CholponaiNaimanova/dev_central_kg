import { useNavigate } from "react-router-dom";

export const AddVac = () => {
    const nav = useNavigate()


    return(
        <div id="addVac">
            <div className="container">
                <div className="vac">
                <div className="addVac">
                    <img src="https://devkg.com/js/img/logo.458f2cd.svg" alt="" />

                    <div className="el">
                        <h1 onClick={() => nav('/modalAddVac') }>Вакансии</h1>
                        <h1>Мероприятия</h1>
                        <h1>Видео</h1>
                    </div>

                    <h2>Выйти</h2>
                </div>
                </div>
            </div>
        </div>
    )
}