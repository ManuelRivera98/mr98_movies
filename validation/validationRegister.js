const validationRegister = (values) => {
  const { name, email, password } = values;
  const errors = {};

  if (name.trim() === '') {
    errors.name = 'El nombre es obligatorio';
  } else if (name.split(' ').length < 2) {
    errors.name = 'Apellido obligatorio';
  } else if (name.split(' ').length > 2) {
    errors.name = 'Solo nombre y primer apellido';
  }

  if (email.trim() === '') {
    errors.email = 'El email es obligatorio';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'El email no es válido';
  }

  if (password.trim() === '') {
    errors.password = 'La contraseña es obligatoria';
  } else if (password.length < 6) {
    errors.password = 'La contraseña debe ser de mínimo 6 carácteres';
  }

  return errors;
};

export default validationRegister;
