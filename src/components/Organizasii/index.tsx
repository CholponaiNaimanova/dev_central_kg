import React from "react";
import useFetch from "../../hooks/useFetch";
import OrganizationsList from "./OrganizationsList";

function Organizasii() {
  const { data, loading } = useFetch({url:'http://3.38.98.134/organizations'});
  console.log(data);
  
    if (loading || !data) {
      return <div>Загрузка...</div>;
    }
  return (
    <div id="organizasii">
      <div className="container">
        <div className="organizasii">
          {data && data.map((organizations: any, index: number) => {
            return(
              <OrganizationsList
              key={index}
              name = {organizations.name}
              events_count = {organizations.events_count}
              jobs_count = {organizations.jobs_count}
              meetups_count = {organizations.meetups_count}
              icon_formats = {organizations.icon_formats}
              />
            )
          })}
          <div className="organizasii--btn">
            <button>Следующая страница</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organizasii;
