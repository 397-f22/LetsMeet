import React, { useState } from "react";
import Date from "./Date";
import FormStepper from "./FormStepper";
import Login from "./Login";

const Signup = () => {
  const [state, setState] = useState({
    step: 0,
    username: "",
  });

  // go back to previous step
  const prevStep = () => {
    const { step } = state;
    setState({ step: step - 1 });
  };

  // proceed to the next step
  const nextStep = () => {
    const { step } = state;
    setState({ step: step + 1 });
  };

  // Handle fields change
  const handleChange = (input) => (e) => {
    setState({ [input]: e.target.value });
  };

  const { step } = state;
  const { username } = state;
  const values = { username };

  return (
    <FormStepper step={state.step}>
      <Login handleChange={handleChange} nextStep={nextStep} values={values} />
      <Date day={"Monday"} />
    </FormStepper>
  );
};

export default Signup;
