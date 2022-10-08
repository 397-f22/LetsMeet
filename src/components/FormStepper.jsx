import { Children } from "react";

const FormStepper = ({ children, step }) => {
    const arrayOfChildren= Children.toArray(children);
    return <>{ arrayOfChildren[step]}</>;
};

export default FormStepper