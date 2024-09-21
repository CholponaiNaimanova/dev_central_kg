import useFetch from "../../hooks/useFetch";
import EventsList from "./EventsList";
import { Navigate, useNavigate } from "react-router-dom";


function Events() {

const navigate = useNavigate();

const events_url = 'http://3.38.98.134/events' 
const  { data, loading } = useFetch({
  url: events_url
});

if (loading) {
  return <div>Loading</div>;
}


const click = () => {
  navigate('/addEvents');
};

  return (
    <div id="events">
      <div className="container">
        <div className="btn1">
          <button onClick={click}>Добавить мероприятиe</button>
        </div>
        {data &&
                  data.map((el: any, index: number) => {
                    return (
                      <EventsList
                        key={index}
                        location={el.location}
                        name={el.name}
                        organization_name={el.organization_name}
                        date={el.date}
                        
                      />
                    );
                  })}
      </div>
    </div>
  )
}

export default Events
