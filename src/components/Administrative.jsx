import React, { useState } from "react";
import Date from "./Date";
import FormStepper from "./FormStepper";
import Login from "./Login";
import { v4 as uuidv4 } from "uuid";
import { useDbUpdate } from "../utilities/firebase";
import {Routes, Route, useNavigate} from 'react-router-dom';

const Administrative = (handleChange, values, Signup) => {
  
  const weekDays = ["M", "Tu", "W", "Th", "Fr", "Sa", "Su"];
  const startHours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  const endHours = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  const [meetingNameState, setMeetingNameState] = useState();
  const [descriptionState, setDescriptionState] = useState();
  const [daysState, setDaysState] = useState([]);
  const [startState, setStartState] = useState("09");
  const [endState, setEndState] = useState("10");

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

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        Lets Meet
      </h1>
      <label>
        New Meeting
        <input
          style={{
            display: "block",
            borderRadius: "4px",
            padding: "5px 10px",
          }}
          type="text"
          placeholder="Meeting Name"
          value={values.username}
          onChange={(e) => {
            setMeetingNameState(e.currentTarget.value);
          }}
        />
      </label>
      <label>
        Description
        <input
          style={{
            display: "block",
            borderRadius: "4px",
            padding: "5px 10px",
          }}
          type="text"
          placeholder="Optional"
          value={values.username}
          onChange={(e) => {
            setDescriptionState(e.currentTarget.value);
          }}
        />
      </label>

      <div className="daySelector" style={{ display: "flex" }}>
        {weekDays.map((day) => (
          <div
            key={day}
            className="daySelectorTile"
            style={{
              width: "2.5rem",
              border: "1px solid #000000",
              textAlign: "center",
            }}
            onClick={() => toggleSelected({ day })}
          >
            {day}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "3rem" }}>
        <div>
          <label>
            Start
            <select
              value={startState}
              onChange={(e) => {
                // console.log(e.target.value);
                setStartState(e.target.value);
              }}
            >
              {startHours.map((h, id) => (
                <option key={id} value={h}>
                  {h}{" "}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            End
            <select
              value={endState}
              onChange={(e) => {
                setEndState(e.target.value);
              }}
            >
              {endHours.map((h, id) => (
                <option key={id} value={h}>
                  {h}{" "}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button
          style={{
            borderRadius: "4px",
            padding: "5px 40px",
            backgroundColor: "#576e93",
            color: "white",
            border: "none",
          }}
          className="shadow-md"
          onClick={() => {dbUpdateMeetingState(); navigateToParticipantPage()}}
        >
          Create Meeting
        </button>
      </div>
    </div>
  );
};

export default Administrative;
