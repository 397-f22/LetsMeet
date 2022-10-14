import React, { useState } from "react";
import Date from "./Date";
import FormStepper from "./FormStepper";
import Login from "./Login";

const Administrative = (handleChange, values, Signup) => {

    const weekDays = ['M', 'Tu', 'W', 'TH', 'Fr', 'Sa', 'Su'];
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
          onChange={(e) => handleChange(e.currentTarget.value)}
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
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
      </label>

      <div className="daySelector" style={{display:"flex"}}>
        {weekDays.map(day => (<div className="daySelectorTile" style={{width: "2.5rem", border: "1px solid #000000", textAlign: "center"}}>{day}</div>))}
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
          onClick={Signup}
        >
          Create Meeting
        </button>
      </div>
    </div>
  );
};

export default Administrative;
