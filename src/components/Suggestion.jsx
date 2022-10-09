import { useState } from 'react';
import * as staticData from '../staticData/events.json';
import { days } from '../utilities/filter';
import TimeSuggestion from './TimeSuggestion';
import { generateMeetingTimes } from '../utilities/filter';

const meetingLengths = [
  { display: '30 min', length: 1 },
  { display: '1 hr', length: 2 },
  { display: '2 hrs', length: 4 },
];

const Suggestion = () => {
  const participants = Object.keys(staticData.events[0].participants);
  const allDays = [...days];
  const allParticipants = [...participants];

  const [meetingLengthState, setMeetingLengthState] = useState(1);
  const [daysState, setDaysState] = useState(allDays);
  const [membersState, setMembersState] = useState(allParticipants);

  const goodMeetingTimes = generateMeetingTimes(staticData.events[0].participants,
                                          meetingLengthState, 
                                          membersState, daysState);

  //console.log(meetingLengthState);
  //console.log(daysState);
  //console.log(membersState);

  return (
    <div className="container">
      <h1>Filter Time Slots</h1>
      <div
        id="filter-bar"
        style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
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
                      style={{ marginRight: '5px' }}
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
                {participants.map((participant, idx) => (
                  <div key={idx}>
                    <input
                      style={{ marginRight: '5px' }}
                      id={participant}
                      type="checkbox"
                      defaultChecked={true}
                      onClick={() => {
                        membersState.includes(participant)
                          ? setMembersState(membersState.filter((x) => x !== participant))
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
      <div>
        <h3>Suggested Times:</h3>
        <div> {/* suggested time cards */
          (goodMeetingTimes.length === 0)
          ? <p>No meeting times meet the given criteria.</p>
          : goodMeetingTimes.map((time_info) => <TimeSuggestion meeting_info={time_info}/>)
        }</div>
      </div>
    </div>
  );
};

export default Suggestion;
