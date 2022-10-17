
// const validateUserData = (key, val) => {
//     switch (key) {
//       default:
//         return '';
//     }
//   };
  
//   const InputField = ({ name, text, state, change }) => (
//     <div className="mb-3">
//       <label htmlFor={name} className="form-label">
//         {text}
//       </label>
//       <input
//         className="form-control"
//         id={name}
//         name={name}
//         defaultValue={state.values?.[name]}
//         onChange={change}
//       />
//       <div className="invalid-feedback">{state.errors?.[name]}</div>
//     </div>
//   );
  
//   const ButtonBar = ({ message, disabled }) => {
//     return (
//       <div className="d-flex">
//         <button
//           type="submit"
//           className="btn btn-primary me-auto"
//           disabled={disabled}
//         >
//           Submit
//         </button>
//         <span className="p-2">{message}</span>
//       </div>
//     );
//   };
  
//   const SignupEditor = ({}) => {
//     const eventId = uuidv4();
//     const [update, result] = useDbUpdate(`/event/${eventId}`);
//     const [state, change] = useFormData(validateUserData);
//     const submit = (evt) => {
//       evt.preventDefault();
//       if (!state.errors) {
//         update(state.values);
//       }
//     };
//     return (
//       <form onSubmit={submit} className={state.errors ? 'was-validated' : null}>
//         <InputField
//           name="meetingName"
//           text="Meeting Name"
//           state={state}
//           change={change}
//         />
//         <InputField
//           name="description"
//           text="Description"
//           state={state}
//           change={change}
//         />
//         <ButtonBar message="" />
//       </form>
//     );
//   };