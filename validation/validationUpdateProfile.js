const validationRegister = (values) => {
  const { name } = values;
  const errors = {};

  if (name.trim() === '') {
    errors.name = 'El nombre es obligatorio';
  } else if (name.split(' ').length < 2) {
    errors.name = 'Apellido obligatorio';
  } else if (name.split(' ').length > 2) {
    errors.name = 'Solo nombre y primer apellido';
  }

  return errors;
};

export default validationRegister;
