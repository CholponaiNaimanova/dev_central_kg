import VacancyList from "./VacancyList";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const Vacancies = () => {
  const { data, loading } = useFetch();
  const navigate = useNavigate();


  if (loading || !data) {
    return <div>Загрузка...</div>;
  }

  const handleClick = () => {
    navigate('/addVac');
  };

  return (
    <div id="vacancy">
      <div className="container">
        <div className="vacancy">
          <div className="vacancy--btn">
            <button onClick={handleClick}>Добавить вакансию</button>
          </div>
          {data &&
            data.map((job: any, index: number) => {
              return (
                <VacancyList
                  key={index}
                  companyName={job.organization_name}
                  jobTitle={job.position}
                  paymentType={job.paymentType}
                  priceFrom={job.price_from}
                  priceTo={job.price_to}
                  type={job.type}
                  city={job.city}
                  currency={job.currency}
                  salary={job.salary}
                />
              );
            })}
          <div className="vacancy--btn2">
            <button>Следующая страница</button>
          </div>
        </div>
      </div>
    </div>
  );
};
