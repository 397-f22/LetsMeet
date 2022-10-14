import React, { useState } from "react";
import Date from "./Date";
import FormStepper from "./FormStepper";
import Login from "./Login";

const validateUserData = (key, val) => {
  switch (key) {
    default: return '';
  }
};

const InputField = ({name, text, state, change}) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">{text}</label>
    <input className="form-control" id={name} name={name} 
      defaultValue={state.values?.[name]} onChange={change} />
    <div className="invalid-feedback">{state.errors?.[name]}</div>
  </div>
);

const ButtonBar = ({message, disabled}) => {
  return (
    <div className="d-flex">
      <button type="submit" className="btn btn-primary me-auto" disabled={disabled}>Submit</button>
      <span className="p-2">{message}</span>
    </div>
  );
};

const SignupEditor = ({ }) => {
  const eventId = uuidv4(); 
  const [update, result] = useDbUpdate(`/event/${eventId}`);
  const [state, change] = useFormData(validateUserData);
  const submit = (evt) => {
    evt.preventDefault();
    if (!state.errors) {
      update(state.values);
    }
  };
  return (
    <form onSubmit={submit} className={state.errors ? 'was-validated' : null}>
      <InputField name="meetingName" text="Meeting Name" state={state} change={change}/>
      <InputField name="description" text="Description" state={state} change={change}/>
      <ButtonBar message=""/>
    </form>
  );
}

const Signup = () => {
  return (
    <div className="container">
      <h1>LetsMeet</h1>
      <SignupEditor/>
      <div>Days of a Week</div>
    </div>
  );
};

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
