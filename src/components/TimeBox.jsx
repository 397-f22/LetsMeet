import { useState } from "react";

export default function TimeBox({ startTime, endTime, granularity }) {
  const numTimeSlots = (endTime - startTime) / granularity;
  const timeSlots = [];
  const [selected, setSelected] = useState([]);

  for (let i = 0; i < numTimeSlots; i++) {
    timeSlots.push(
      <div
        style={{
          borderBottom: "solid 1px black",
          backgroundColor: "lightblue"
        }}
        key={i}
        onMouseDown={(e)=>console.log(e)}
      >{i}</div>
    );
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto",
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      {timeSlots}
    </div>
  );
}
