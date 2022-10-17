import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDbUpdate } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';

const Administrative = () => {
  const weekDays = ['M', 'Tu', 'W', 'Th', 'Fr', 'Sa', 'Su'];
  const startHours = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  const endHours = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
  ];

  const [meetingNameState, setMeetingNameState] = useState();
  const [descriptionState, setDescriptionState] = useState('');
  const [daysState, setDaysState] = useState([]);
  const [daysError, setDaysError] = useState(false);
  const [startEndError, setStartEndError] = useState(false);
  const [startState, setStartState] = useState('09');
  const [endState, setEndState] = useState('10');

  const eventId = uuidv4();
  const [update, result] = useDbUpdate(`/events/${eventId}`);
  const navigate = useNavigate();
  const navigateToParticipantPage = () => {
    navigate(`events/${eventId}`);
  };

  const dbUpdateMeetingState = () => {
    // {meetingNameState, descriptionState, daysState, startState, endState}

    const meetingDetails = {
      name: meetingNameState,
      description: descriptionState,
      participants: {},
      startTime: startState,
      endTime: endState,
      dayOptions: daysState,
    };
    update(meetingDetails);
  };

  const toggleSelected = ({ day }) => {
    setDaysState(
      daysState.includes(day)
        ? daysState.filter((x) => x !== day)
        : [...daysState, day]
    );
  };

  console.log(daysState);
  console.log(startState);
  console.log(endState);
  console.log(meetingNameState);
  console.log(descriptionState);

  const onSubmit = (e) => {
    e.preventDefault();
    const isDaySelected = daysState.length;
    const isStartEndValid = parseInt(startState) < parseInt(endState);
    if (!isDaySelected) setDaysError(true);
    if (!isStartEndValid) setStartEndError(true);
    if (!isDaySelected || !isStartEndValid) return;
    dbUpdateMeetingState();
    navigateToParticipantPage();
  };

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        Lets Meet
      </h1>
      <form
        id="create-meeting"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100vh',
          alignItems: 'center',
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <label>
          New Meeting
          <input
            required={true}
            style={{
              display: 'block',
              borderRadius: '4px',
              padding: '5px 10px',
            }}
            type="text"
            placeholder="Meeting Name"
            onChange={(e) => {
              setMeetingNameState(e.currentTarget.value);
            }}
          />
        </label>
        <label>
          Description
          <input
            style={{
              display: 'block',
              borderRadius: '4px',
              padding: '5px 10px',
            }}
            type="text"
            placeholder="Optional"
            onChange={(e) => {
              setDescriptionState(e.currentTarget.value);
            }}
          />
        </label>

        <div className="daySelector" style={{ display: 'flex' }}>
          {weekDays.map((day, i) => {
            let style = {
              width: '2.5rem',
              border: '1px solid black',
              textAlign: 'center',
            };
            if (daysState.includes(day)) {
              style = { ...style, backgroundColor: '#576e93', color: 'white' };
            }
            return (
              <div
                key={day}
                className="daySelectorTile"
                style={i === 0 ? style : { ...style, borderLeft: '0' }}
                onClick={() => toggleSelected({ day })}
              >
                {day}
              </div>
            );
          })}
        </div>
        {daysError && <p>You must select at least one day</p>}
        <div style={{ display: 'flex', gap: '3rem' }}>
          <div>
            <label>
              Start
              <select
                required={true}
                value={startState}
                onChange={(e) => {
                  // console.log(e.target.value);
                  setStartState(e.target.value);
                }}
              >
                {startHours.map((h, id) => (
                  <option key={id} value={h}>
                    {h}{' '}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <label>
              End
              <select
                required={true}
                value={endState}
                onChange={(e) => {
                  setEndState(e.target.value);
                }}
              >
                {endHours.map((h, id) => (
                  <option key={id} value={h}>
                    {h}{' '}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        {startEndError && <p>Start time cannot be greater than end time</p>}
      </form>

      <div style={{ marginBottom: '5rem' }}>
        <button
          form="create-meeting"
          style={{
            borderRadius: '4px',
            padding: '5px 40px',
            backgroundColor: '#576e93',
            color: 'white',
            border: 'none',
          }}
          className="shadow-md"
        >
          Create Meeting
        </button>
      </div>
    </div>
  );
};

export default Administrative;
