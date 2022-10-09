import * as staticData from '../staticData/events.json';

const TimeSuggestion = ( meeting_info ) => {
    console.log("asdf"); 
    console.log(meeting_info);
    return (
        <div className="card m-1 p-2">
          <div className="card-title">
            <h2>{meeting_info.start_time} - {meeting_info.end_time}</h2>
          </div>
          <div className="card-body">
            <div className="participants">
              <p> Participants: {meeting_info.participants}</p>
            </div>
          </div>
        </div>
      );
}

export default TimeSuggestion;