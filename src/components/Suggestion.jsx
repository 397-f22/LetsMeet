import {days} from '../utilities/filter';

const meetingLengths = ["30 min", "1 hr", "2 hrs"];

const Suggestion = () => {
  return (
    <div className="container">
      <h1>Filter Time Slots</h1>
      <div>
        <div className="dropdown"> 
          <button type="button"
                  className="btn btn-primary dropdown-toggle"
                  id="meetingLength"
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
            Meeting Length
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
              meetingLengths.map((length, id) => <a className="dropdown-item" href="#" key={id}>{length}</a>)
            }
          </div>
        </div>

        <button type="button" className="btn btn-primary">
          Days
        </button>
        <button type="button" className="btn btn-primary">
          Members
        </button>
      </div>
      <div>
        <h3>Suggested Times:</h3>
        <div>{/* suggested time cards */}</div>
      </div>
    </div>
  );
};

export default Suggestion;
