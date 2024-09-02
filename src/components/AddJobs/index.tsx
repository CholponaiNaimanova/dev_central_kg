

export const AddJobs = () => {

    return(
        <div className="jobs">
            <div className="jobsText">
            <h1>Добавить новую вакансию</h1>
            <p>Вакансия должна относится к сфере информационных технологий и будет опубликована после проверки модератором</p>

            <div className="doljnost">
                <h2>Организация <span>*</span></h2>
                <button>Создать или выбрать организацию</button>

                <h2>Должность <span>*</span></h2>

                <div className="input">
                <input type="text" />
                <p>Например “Senior PHP Developer”</p>
                </div>
            </div>

            <div className="opisanie">
                <div className="opisanieVacancy">
                <h2>Описание вакансии <span>*</span></h2>

                <input type="text" />
                
                <p>Длина текста: 0 символов, минимально <br /> допустимое значение 200 символов</p>
                </div>

                <p>Здесь необходимо указать условия труда, требования и обязанности. <br /> Также вы можете указать краткое описание компании, например: <br />

                “В дружный отдел дизайна игровой студии ”Bloody Fun” требуется <br /> проект менеджер со стажем”</p>

            </div>

            </div>
        </div>
    )
}