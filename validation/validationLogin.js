const validationLogin = (values) => {
  const { email, password } = values;
  const errors = {};

  if (email.trim() === '') {
    errors.email = 'El email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'El email no es válido';
  }

  if (password.trim() === '') {
    errors.password = 'La contraseña es obligatoria';
  }

  return errors;
};

export default validationLogin;
