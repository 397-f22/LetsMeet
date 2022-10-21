import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { days } from "../utilities/filter";
import TimeSuggestion from "./TimeSuggestion";
import { generateMeetingTimes } from "../utilities/filter";
import { useRtdbData } from "../utilities/firebase";

const meetingLengths = [
  { display: "30 min", length: 1 },
  { display: "1 hr", length: 2 },
  { display: "2 hrs", length: 4 },
];

const Suggestion = () => {
  const { eventId } = useParams();
  const [data, isLoading] = useRtdbData(`events/${eventId}`);

  const participantNames = Object.keys(data?.participants || {});
  const participants = Object.entries(data?.participants || {});

  const [meetingLengthState, setMeetingLengthState] = useState(1);
  const [daysState, setDaysState] = useState([...days]);
  const [membersState, setMembersState] = useState([...participantNames]);

  useEffect(() => {
    setMembersState(participantNames);
  }, [isLoading]);

  if (isLoading) return <div>loading...</div>;

  const goodMeetingTimes = generateMeetingTimes(
    participants,
    meetingLengthState,
    membersState,
    daysState
  );

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ padding: "20px" }}>Find Times</h1>
      <div
        id="filter-bar"
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        <div className="dropdown">
          <button
            type="button"
            style={{ backgroundColor: "#576e93", border: "none" }}
            className="btn btn-primary dropdown-toggle"
            id="meetingLength"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Meeting Length
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {meetingLengths.map((v, id) => (
              <a
                className="dropdown-item"
                href="#"
                key={id}
                onClick={() => {
                  setMeetingLengthState(v.length);
                }}
              >
                {v.display}
              </a>
            ))}
          </div>
        </div>
        <button
          type="button"
          style={{ backgroundColor: "#576e93", border: "none" }}
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#dayModal"
        >
          Days
        </button>
        <div
          className="modal fade"
          id="dayModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="dayModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="dayModalLabel">
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
                      defaultChecked={true}
                      onClick={() => {
                        daysState.includes(day)
                          ? setDaysState(daysState.filter((x) => x !== day))
                          : setDaysState([...daysState, day]);
                      }}
                    />
                    <label htmlFor={day}>{day}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          style={{ backgroundColor: "#576e93", border: "none" }}
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#memberModal"
        >
          Members
        </button>
        <div
          className="modal fade"
          id="memberModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="memberModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="memberModalLabel">
                  Select Members
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
                {participantNames.map((participant, idx) => (
                  <div key={idx}>
                    <input
                      style={{ marginRight: "5px" }}
                      id={participant}
                      type="checkbox"
                      defaultChecked={true}
                      onClick={() => {
                        membersState.includes(participant)
                          ? setMembersState(
                              membersState.filter((x) => x !== participant)
                            )
                          : setMembersState([...membersState, participant]);
                      }}
                    />
                    <label htmlFor={participant}>{participant}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", padding: "1rem" }}>
        <div>
          {
            /* suggested time cards */
            goodMeetingTimes.length === 0 ? (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "18px" }}>
                  No meeting times meet the given criteria.
                </p>
                <span style={{ fontSize: "12px" }}>
                  Try broadening your search!
                </span>
              </div>
            ) : (
              <>
                <h2 className="py-2">Suggested Times:</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {goodMeetingTimes.map((time_info, idx) => (
                    <TimeSuggestion key={idx} meeting_info={time_info} />
                  ))}
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
