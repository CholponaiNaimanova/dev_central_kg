

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

            <div className="telegram">
                
                    <h1>Telegram</h1>
                    <input type="text" />

                    <h1>Skype</h1>
                    <input type="text" />

                    <h1>E-Mail</h1>
                    <input type="text" />

                    <h1>Телефон</h1>
                    <input type="text" />

                    <h1>Тип<span>*</span></h1>

                    <select name="" id="">
                        <option></option>
                        <option value="">Работа в офисе (только Кыргызстан)</option>
                        <option value="">Разовая работа (Проект)</option>   
                        <option value="">Удаленная работа (Remote)</option>
                        <option value="">Переезд (Работа за границей)</option>
                        <option value="">Стажировка (только Кыргызстан)</option>
                    </select>

                    <h1>Город <span>*</span></h1>
                    <input type="text" />

                    <h1>Оклад <span>*</span></h1>

                    <select name="" id="">
                        <option></option>
                        <option value="">Фиксированный оплата за проект</option>
                        <option value="">Почасовая оплата</option>
                        <option value="">Ежемесячный оклад</option>
                        <option value="">Неоплачиваемая</option>
                    </select>


                    <p>Не заполненны обязательные поля: <span>Организация, Должность, Описание вакансии, Город, Контакт</span></p>


                    <div className="btn">
                        <button>Продолжить</button>
                        <button>Сохранить</button>
                    </div>
                
            </div>

            </div>
        </div>
    )
}