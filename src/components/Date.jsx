import React from "react";

const Date = ({ day, prevStep, nextStep }) => {



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
          <button
            key={idx}
            style={{
              width: "100%",
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
