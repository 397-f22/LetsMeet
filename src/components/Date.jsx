import React from "react";
import { useState } from "react";


const Date = ({ day, prevStep, nextStep, meetingData, participantName}) => {

  const dbTimes = meetingData.events.event1.participants["Max"]
  
  // Offsets (for DB to Selected conversion)

  const Offsets = { 
    "M": 0, 
    "Tu": 48, 
    "W": 96, 
    "Th": 144, 
    "F": 192, 
    "Sa": 240, 
    "Su": 288
  }

  // Example databaseTimes = [18, 19, 20, 21]
  // Expected return: [0, 1]
  const DBtoSelected = (databaseTimes) => {
    const filteredTimes = dbTimes.filter((time) => time % 2 == 0); 
    return filteredTimes.map((time) => (time / 2) - 9 - Offsets[day])
  }

  // Monday selected = [0] --> DBTIME = [48 + (i + 9) * 2, 48 + (i + 9) * 2 + 1]
  const SelectedtoDB = (selected) => { 
    const reverseTimes = selected.map((time) => (time + 9) * 2 + Offsets[day]); 
    return reverseTimes.map()
  }

  // 1. Initialize selected
  // selected = transform(participants.participant)
  

  // 2. When the user selects 'Next Day'or 'Previous Day' or submit
  // participants.participant = ReverseTransform(selected)

  const [selected, setSelected] = useState([DBtoSelected(dbTimes)]);
  // setSelected(DBtoSelected(dbTimes))

  console.log(DBtoSelected(dbTimes));

  

  const timeOptions = [];

  for (let i = 0; i < 9; i++) {
    timeOptions.push(`${i + 9}:00`);
  }

  // console.log("Event is", event.events.event1.dayOption[day])


  const style = {
    width: "100%",
    height: "50px",
    borderRadius: "5px"
  }

  const TimeBlock = ({ time, idx }) => {
    <div className="card "
      onClick={() => setSelected(toggle(idx, selected))}
      key={idx}
      style={style}
    >
      {time}

    </div>
  }

  const toggle = (x, lst) =>
    lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst]

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "10% 70% 20%",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <h1 style={{ padding: "20px" }}>Select {day} Availability </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {timeOptions.map((time, idx) => (
            <div className="card "
            onClick={() => setSelected(toggle(idx, selected))}
            key={idx}
            style={{ backgroundColor: 
                (selected.includes(idx))
                ? 'lightgreen'
                 : 'white',}}
          >
            {time}

          </div>
        )

        )}
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
          <button style={{ borderRadius: "4px", width: "100%" }}
            onClick={prevStep}>
            Previous Day
          </button>
          <button style={{ borderRadius: "4px", width: "100%" }}
            onClick={nextStep}>
            Next Day
          </button>
        </div>
        <button style={{ borderRadius: "4px", padding: "0px 20px" }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Date;
