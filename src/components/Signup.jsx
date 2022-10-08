import React, { Component } from "react";
import Date from "./Date";
import FormStepper from "./FormStepper";
import Login from "./Login";

export default class Signup extends Component {
  state = {
    step: 0,
    username: "",
  };

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { username } = this.state;
    const values = { username };

    return (
      <FormStepper step={this.state.step}>
        <Login handleChange={this.handleChange} />
      </FormStepper>
    );
  }
}
