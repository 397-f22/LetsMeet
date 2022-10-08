import React from "react";

const Login = ({ handleChange, nextStep}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15rem",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        Robotics Club Meeting
      </h1>
      <div>
        <label style={{ display: "block" }}>Name:</label>
        <input type="text" onChange={handleChange} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button
          style={{
            borderRadius: "4px",
            padding: "5px 40px",
            backgroundColor: "#414BB2",
            color: "white",
          }}
        >
          Find Times
        </button>
        <button
          style={{
            borderRadius: "4px",
            padding: "5px 40px",
            backgroundColor: "#414BB2",
            color: "white",
          }}
         onClick={nextStep}>
          Select Times
        </button>
      </div>
    </div>
  );
};

export default Login;
