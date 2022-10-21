import React from "react";
import { useState } from "react";
import { useDbUpdate } from "../utilities/firebase";
import { useNavigate, useParams } from "react-router-dom";

const Date = ({ day, prevStep, nextStep, meetingData, participantName }) => {
  const { eventId } = useParams();
  const [update, result] = useDbUpdate(
    `/events/${eventId}/participants/${participantName}`
  );
  const navigate = useNavigate();

  // Offsets (for DB to Selected conversion)
  const Offsets = {
    Su: 0,
    M: 48,
    Tu: 96,
    W: 144,
    Th: 192,
    Fr: 240,
    Sa: 288,
  };

  const dayNameMap = {
    Su: "Sunday",
    M: "Monday",
    Tu: "Tuesday",
    W: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
  };

  const mapDayToFullName = (day) => dayNameMap[day];

  const selectedToDB = () => {
    // const result = [];
    // const calculateBucket = (hour) =>
    //   (parseInt(meetingData.startTime) + hour) * 2 + Offsets[day];
    // for (let i = 0; i < selected.length; i++) {
    //   const hour = selected[i];
    //   const bucket = calculateBucket(hour);
    //   result.push(bucket);
    //   result.push(bucket + 1);
    // }
    // return result;

    const list1 = selected.map(
      (hour) => (parseInt(meetingData.startTime) + hour) * 2 + Offsets[day]
    );
    const list2 = list1.map((hour) => hour + 1);
    return [...list1, ...list2];
  };

  const dbToSelected = () => {
    if (meetingData.participants === undefined) return [];
    if (meetingData.participants[participantName] !== undefined) {
      return meetingData.participants[participantName].map(
        (dbTime) => (dbTime - Offsets[day]) / 2
      );
    } else {
      return [];
    }
  };

  const updateMeetingData = () => {
    const newTimes = selectedToDB();
    update({ ...newTimes });
  };

  // 1. Initialize selected
  // selected = transform(participants.participant)

  // 2. When the user selects 'Next Day'or 'Previous Day' or submit
  // participants.participant = ReverseTransform(selected)

  const [selected, setSelected] = useState(dbToSelected());
  const timeOptions = [];
  const startTime = parseInt(meetingData.startTime);
  const endTime = parseInt(meetingData.endTime);

  for (let i = 0; i < endTime - startTime; i++) {
    timeOptions.push(`${i + startTime}:00`);
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

  console.log(selected);

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
        {timeOptions.map((time, idx) => (
          <button
            onClick={() => setSelected(toggle(idx, selected))}
            className="shadow"
            key={idx}
            style={{
              backgroundColor: selected.includes(idx) ? "#C7CEE1" : "white",
              width: "100%",
              padding: "10px 40px",
              borderRadius: "8px",
              border: "none",
              transition: "background-color 300ms ease-in-out",
            }}
          >
            {time}
          </button>
        ))}
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
            navigate("filter");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Date;
