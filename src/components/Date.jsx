import React from "react";

const Date = ({ day }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const timeOptions = [];

  for (let i = 0; i < 9; i++) {
    timeOptions.push(`${i + 9}:00`);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "10% 70% 20%",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <h1>Select {day} Time </h1>{" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {timeOptions.map((time) => (
          <button
            style={{
              width: "60%",
              height: "50px",
              borderRadius: "5px",
            }}
          >
            {time}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button
            style={{
              width: "120px",
            }}
          >
            Previous Day
          </button>
          <button
            style={{
              width: "120px",
            }}
          >
            Next Day
          </button>
        </div>

        <button
          style={{
            width: "60%",
            height: "60px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Date;
