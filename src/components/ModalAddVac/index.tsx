import { AddVac } from "../AddVacancies"
import { useNavigate } from "react-router-dom";


export const ModalAddVac = () => {
    const nav = useNavigate()


    return(
        <div className="addVc">
            <div className="container">
                <div className="add">
                    {/* <AddVac/> */}
                    <img src="https://devkg.com/js/img/not-found-jobs.f847c90.svg" alt="img" width={470}/>

                    <div className="addText">
                        <p>У вас пока нет вакансий. При добавлении вакансии 
                            <br /> необходимо будет указать название компании, 
                            требования и <br /> оклад.</p>

                            <p>Хотите добавить?</p>

                            <button onClick={() => nav('/addJobs') }
                            >Добавить вакансию</button>
                    </div>
                </div>
            </div>
        </div>
    )
}