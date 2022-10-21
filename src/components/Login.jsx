import React from "react";
import { useNavigate } from "react-router-dom";
import { useRtdbData } from "../utilities/firebase";

const Login = ({ handleChange, values, nextStep, eventId }) => {
  const navigate = useNavigate();
  const [data, isLoading] = useRtdbData(`events/${eventId}`);
  if (isLoading) return <h1>Loading...</h1>;
  const { name, description } = data;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
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
          {name}
        </h1>
        <p>{description}</p>
      </div>
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
            backgroundColor: "#576e93",
            color: "white",
            border: "none",
          }}
          className="shadow-md"
          onClick={() => navigate(`filter`)}
        >
          Find Times
        </button>
        <button
          style={{
            borderRadius: "4px",
            padding: "5px 40px",
            backgroundColor: "#576e93",
            color: "white",
            border: "none",
          }}
          className="shadow-md"
          onClick={nextStep}
        >
          Select Times
        </button>
      </div>
    </div>
  );
};

export default Login;
