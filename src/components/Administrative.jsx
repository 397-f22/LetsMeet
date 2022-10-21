import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDbUpdate } from "../utilities/firebase";
import { useNavigate } from "react-router-dom";

const Administrative = () => {
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
  const [descriptionState, setDescriptionState] = useState("");
  const [daysState, setDaysState] = useState([]);
  const [daysError, setDaysError] = useState(false);
  const [startEndError, setStartEndError] = useState(false);
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
      // participants: {"None": [0, 0]},
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
        : [...daysState, day].sort(
            (d1, d2) => weekDays.indexOf(d1) - weekDays.indexOf(d2)
          )
    );
  };

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
      <form
        id="create-meeting"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100vh",
          alignItems: "center",
        }}
        onSubmit={(e) => onSubmit(e)}
      >
        <label style={{ fontWeight: "bold", width: "100%" }}>
          New Meeting
          <input
            required={true}
            style={{
              display: "block",
              borderRadius: "4px",
              padding: "5px 10px",
              width: "100%",
            }}
            type="text"
            placeholder="Meeting Name"
            onChange={(e) => {
              setMeetingNameState(e.currentTarget.value);
            }}
          />
        </label>
        <label style={{ fontWeight: "bold", width: "100%" }}>
          Description
          <input
            style={{
              display: "block",
              borderRadius: "4px",
              padding: "5px 10px",
              width: "100%",
            }}
            type="text"
            placeholder="Optional"
            onChange={(e) => {
              setDescriptionState(e.currentTarget.value);
            }}
          />
        </label>
        <div className="daySelector">
          <p style={{ fontWeight: "bold" }}>Days of The Week</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {weekDays.map((day, i) => {
              let style = {
                width: "2rem",
                height: "2rem",
                lineHeight: "1.8rem",
                border: "1px solid black",
                textAlign: "center",
                cursor: "pointer",
                borderRadius: "50%",
              };
              if (daysState.includes(day)) {
                style = {
                  ...style,
                  backgroundColor: "#576e93",
                  color: "white",
                };
              }
              return (
                <div
                  key={day}
                  className="daySelectorTile"
                  style={style}
                  onClick={() => toggleSelected({ day })}
                >
                  {day}
                </div>
              );
            })}
          </div>
          {daysError && (
            <p style={{ fontSize: "0.75rem", color: "red", marginTop: "5px" }}>
              You must select at least one day
            </p>
          )}
        </div>
        <div>
          <div style={{ display: "flex", gap: "3rem" }}>
            <div>
              <label style={{ fontWeight: "bold" }}>
                Start Time
                <select
                  className="mx-2"
                  required={true}
                  value={startState}
                  onChange={(e) => {
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
              <label style={{ fontWeight: "bold" }}>
                End Time
                <select
                  className="mx-2"
                  required={true}
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
          {startEndError && (
            <p
              style={{
                display: "block",
                fontSize: "0.75rem",
                color: "red",
                marginTop: "5px",
              }}
            >
              Start time cannot be greater than end time
            </p>
          )}
        </div>
      </form>

      <div style={{ marginBottom: "5rem" }}>
        <button
          form="create-meeting"
          style={{
            borderRadius: "4px",
            padding: "5px 40px",
            backgroundColor: "#576e93",
            color: "white",
            border: "none",
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
