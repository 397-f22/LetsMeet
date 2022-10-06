const EventComponent = ({ event }) => {
    return (
      <div className="card m-1 p-2">
        <div className = "card-title">
          <h2>{event.name}</h2>
        </div>
        <div className = "card-body">
          <div className='time'>
            <p> Time:  {event.time}</p>
          </div>

          <div className='location'>
            <p>Location: {event.location}</p>
          </div>

          <div className='participants'>
          <p> Participants {event.participants}</p>
          </div>
        </div>
      </div>
    );
  }

  export default EventComponent;