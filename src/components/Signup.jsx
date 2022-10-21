import React, { useState } from 'react';
import Date from './Date';
import FormStepper from './FormStepper';
import Login from './Login';
import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from 'react-router-dom';
import { useRtdbData } from '../utilities/firebase';

function HeaderView() {
  const location = useLocation();
}

const Signup = () => {
  const pathname = location.pathname;
  const eventId = pathname.split('/')[2];
  const [event, loading] = useRtdbData(`events/${eventId}`);

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

  // const dayOptions = Object.keys(event.dayOptions)
  // console.log("day options: ", dayOptions)

  if (loading) return <div>loading...</div>;

  // event.dayOptions.map((day ))
  return (
    <FormStepper step={state.step}>
      <Login
        handleChange={(name) => setState({ ...state, username: name })}
        nextStep={nextStep}
        values={values}
        eventId={eventId}
      />
      {event.dayOptions.map((day) => {
        return (
          <Date
            day={day}
            key={day}
            prevStep={prevStep}
            nextStep={nextStep}
            meetingData={event}
            participantName={values.username || 'unknown'}
          />
        );
      })}
    </FormStepper>
  );
};

export default Signup;
