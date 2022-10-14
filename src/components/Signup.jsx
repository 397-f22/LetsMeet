import React, { useState } from 'react';
import Date from './Date';
import FormStepper from './FormStepper';
import Login from './Login';
import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';
import { v4 as uuidv4 } from 'uuid';


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

const SignupOld = ({ event, openFilter }) => {
  const [state, setState] = useState({
    day: 0,
    step: 0,
    username: '',
  });

  // go back to previous step
  const prevStep = () => {
    const { step } = state;
    setState({ ...state, step: step - 1, day: day - 1 });
  };

  // proceed to the next step
  const nextStep = () => {
    const { step } = state;
    setState({ ...state, step: step + 1, day: day + 1 });
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setState({ [input]: e.target.value });
  };

  const { step, day } = state;
  const { username } = state;
  const values = { username };

  return (
    <FormStepper step={state.step}>
      <Login
        handleChange={(name) => setState({ ...state, username: name })}
        nextStep={nextStep}
        values={values}
        openFilter={openFilter}
      />
      {event.events.event1.dayOption.map(([day]) => {
        return (
          <Date
            day={day}
            key={day}
            prevStep={prevStep}
            nextStep={nextStep}
            meetingData={event}
            openFilter={openFilter}
            participantName={values.username || 'unknown'}
          />
        );
      })}
    </FormStepper>
  );
};

export default Signup;
