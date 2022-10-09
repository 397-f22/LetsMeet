import * as staticData from "../staticData/events.json";
import { days } from "../utilities/filter";

const meetingLengths = ["30 min", "1 hr", "2 hrs"];

const Suggestion = () => {
  const participants = Object.keys(staticData.events[0].participants);
  return (
    <div className="container">
      <h1>Filter Time Slots</h1>
      <div
        id="filter-bar"
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            id="meetingLength"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Meeting Length
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {meetingLengths.map((length, id) => (
              <a className="dropdown-item" href="#" key={id}>
                {length}
              </a>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Days
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Select Days
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {days.map((day, idx) => (
                  <div key={idx}>
                    <input
                      style={{ marginRight: "5px" }}
                      id={day}
                      type="checkbox"
                    />
                    <label htmlFor={day}>{day}</label>
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Suggested Times:</h3>
        <div>{/* suggested time cards */}</div>
      </div>
    </div>
  );
};

export default Suggestion;
