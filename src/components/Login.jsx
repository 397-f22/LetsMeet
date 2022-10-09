import React from "react";

const Login = ({ handleChange, values, nextStep, openFilter }) => {
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
          padding: "20px",
        }}
      >
        Swarm Meeting 3
      </h1>
      <label>
        Name
        <input
          style={{
            display: "block",
            borderRadius: "4px",
            padding: "5px 10px",
          }}
          type="text"
          placeholder="Enter username here"
          value={values.username}
          onChange={(e) => handleChange(e.currentTarget.value)}
        />
      </label>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button
          style={{
            borderRadius: "4px",
            padding: "5px 40px",
            backgroundColor: "#414BB2",
            color: "white",
          }}
          onClick={openFilter}
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
          onClick={nextStep}
        >
          Select Times
        </button>
      </div>
    </div>
  );
};

export default Login;
