import React, { useState } from "react";
import Date from "./Date";
import FormStepper from "./FormStepper";
import Login from "./Login";

const Signup = ({ event }) => {
  const [state, setState] = useState({
    day: 0,
    step: 0,
    username: "",
  });

  // go back to previous step
  const prevStep = () => {
    const { step } = state;
    console.log("PrevStep Current day is set to ", day)
    setState({ step: step - 1, day: day - 1 });
    console.log("PrevStep Current day is now set to ", day)
  };

  // proceed to the next step
  const nextStep = () => {
    const { step } = state;
    setState({ step: step + 1, day: day + 1});
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
      <Login handleChange={handleChange} nextStep={nextStep} values={values} />
      {event.events.event1.dayOption.map(([day]) => {
        return <Date day={day} key={day} prevStep={prevStep} nextStep={nextStep} meetingData={event} />
      })}
    </FormStepper>
  );
};

export default Signup;
