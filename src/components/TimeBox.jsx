import { useState } from "react";

export default function TimeBox({ startTime, endTime, granularity }) {
  const numTimeSlots = (endTime - startTime) / granularity;
  const timeSlots = [];
  const [selected, setSelected] = useState([]);



  const [mouseDown, setMouseDown] = useState(false)
  window.onmousedown = () => {
    setMouseDown(true)
  }
  window.onmouseup = () => {
    setMouseDown(false)
  }

  for (let i = startTime; i < numTimeSlots + startTime; i++) {
    timeSlots.push(
      <div className="box"
        style={{
          borderBottom: "solid 1px black",
          backgroundColor: selected.includes(i) ? 'green' : 'lightblue'
        }}
        key={i}
        onMouseDown={(e) => {
          console.log(e);
          setSelected(toggle(i, selected))
          //console.log(selected)
        }
        }
        onMouseOver={(e) => {
          if (mouseDown) {
            setSelected(toggle(i, selected))
          }
           console.log(e)
        }
        }
        onMouseUp={(e) => {
          setMouseDown(false)
          console.log(selected)
        }
        }

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



const toggle = (x, lst) =>
  lst.includes(x) ? lst.filter((y) => y !== x) : [x, ...lst];


const selectFromHere = (event) => {
  return event;
}

const selectToHere = (event) => {
  return event;
}

