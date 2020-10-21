import { useState, useEffect } from 'react';

// initialState= estado inicial para el form
// validation = Es una función que va a tener todas las reglas de validación dependiendo del form
// fn = función a ejecutar en el evento submit.
const useValidationForm = (initialState, validation, fn) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const validationErrors = Object.keys(errors).length === 0;

      if (validationErrors) {
        // fn => método a ejecutar dependiendo del componente
        fn();
      }
      // Reiniciar submitForm
      setSubmitForm(false);
    }
  }, [errors]);

  // Function change
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // Function submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const Errors = validation(values);
    setErrors(Errors);
    setSubmitForm(true);
  };

  // FUnction onBlur
  const handleBlur = () => {
    const Errors = validation(values);
    setErrors(Errors);
  };

  return [
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  ];
};

export default useValidationForm;
