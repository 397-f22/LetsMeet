import React, { useState } from 'react';
import Date from './Date';
import FormStepper from './FormStepper';
import Login from './Login';


const Signup = ({ event, openFilter }) => {
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
