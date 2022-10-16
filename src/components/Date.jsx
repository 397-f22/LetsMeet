import React from "react";
import { useState } from "react";
import TimeBox from "./TimeBox";
import './Date.css'

const Date = ({
  day,
  prevStep,
  nextStep,
  meetingData,
  participantName,
  openFilter,
}) => {
  const dbTimes = meetingData.events.event1.participants[participantName];

  // Offsets (for DB to Selected conversion)

  const Offsets = {
    Su: 0,
    M: 48,
    Tu: 96,
    W: 144,
    Th: 192,
    F: 240,
    Sa: 288,
  };

  const dayNameMap = {
    Su: "Sunday",
    M: "Monday",
    Tu: "Tuesday",
    W: "Wednesday",
    Th: "Thursday",
    F: "Friday",
    Sa: "Saturday",
  };

  const mapDayToFullName = (day) => dayNameMap[day];

  const filteredDBTimes = (databaseTimes) => {
    const filteredDbTimes = databaseTimes.filter((time) => {
      Offsets <= time && Offsets + 48 > time;
    });
    return filteredDbTimes;
  };

  // Example databaseTimes = [18, 19, 20, 21]
  // Expected return: [0, 1]
  const DBtoSelected = (databaseTimes) => {
    const filteredTimes = dbTimes.filter((time) => time % 2 == 0);
    return filteredTimes.map((time) => (time - Offsets[day]) / 2 - 9);
  };

  // Monday selected = [0] --> DBTIME = [48 + (i + 9) * 2, 48 + (i + 9) * 2 + 1]
  const SelectedtoDB = (selected) => {
    const reverseTimes = selected.map((time) => (time + 9) * 2 + Offsets[day]);
    var b = [];
    for (var i = 0; i < selected.length; i++) {
      b.push(reverseTimes[i]);
      b.push(reverseTimes[i] + 1);
    }
    return b;
  };

  const updateMeetingData = () => {
    meetingData.events.event1.participants[participantName] =
      SelectedtoDB(selected);
  };

  // 1. Initialize selected
  // selected = transform(participants.participant)

  // 2. When the user selects 'Next Day'or 'Previous Day' or submit
  // participants.participant = ReverseTransform(selected)

  const [selected, setSelected] = useState(DBtoSelected(dbTimes));
  // setSelected(DBtoSelected(dbTimes))

  const timeOptions = [];

  for (let i = 0; i < 9; i++) {
    timeOptions.push(`${i + 9}:00`);
  }

  const style = {
    width: "100%",
    height: "50px",
    borderRadius: "5px",
  };

  const TimeBlock = ({ time, idx }) => {
    <div
      className="card "
      onClick={() => setSelected(toggle(idx, selected))}
      key={idx}
      style={style}
    >
      {time}
    </div>;
  };

  const toggle = (x, lst) =>
    lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "10% 70% 20%",
        height: "100vh",
        width: "100%",
        alignItems: "center",
        padding: "5%",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <span style={{ color: "#A8B8D2" }}>{mapDayToFullName(day)}</span>{" "}
        Availability
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
          overflow: "auto",
          padding: "20px",
          width: "100%",
          height: "100%",
        }}
      >
      
      <div className="scroller">
        <TimeBox startTime={0} endTime={12} granularity={1} />
        <TimeBox startTime={12} endTime={24} granularity={1} />
      </div>
         
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button
            style={{
              backgroundColor: "#576e93",
              borderRadius: "4px",
              width: "100%",
              padding: "2px 20px",
              color: "white",
              border: "none",
            }}
            className="shadow-sm"
            onClick={() => {
              prevStep();
              updateMeetingData();
            }}
          >
            Previous Day
          </button>
          <button
            style={{
              backgroundColor: "#576e93",
              borderRadius: "4px",
              width: "100%",
              padding: "2px 20px",
              color: "white",
              border: "none",
            }}
            className="shadow-sm"
            onClick={() => {
              nextStep();
              updateMeetingData();
            }}
          >
            Next Day
          </button>
        </div>
        <button
          style={{
            backgroundColor: "#576e93",
            borderRadius: "4px",
            padding: "2px 20px",
            color: "white",
            border: "none",
          }}
          className="shadow-sm"
          onClick={() => {
            updateMeetingData();
            openFilter();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Date;
