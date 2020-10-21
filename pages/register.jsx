import React, { useState } from 'react';

// router api
import { useRouter } from 'next/router';
import { Container, Legend, Form2 } from '../public/styles/stylesForm';
import { Button2 } from '../public/styles/stylesButtons';

// firebase
import { useStateFirebase } from '../firebase/context';

// validations
import useValidationForm from '../hooks/useValidationForm';
import validationRegister from '../validation/validationRegister';

import Layout from '../components/Layout/index';

// helper NameToUpperCase
import NameToUpperCase from '../helpers/NameToUpperCase';

const Register = () => {
  const [errorRegister, setErrorRegister] = useState(null);

  const Router = useRouter();

  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  // values context firebase
  const { firebase } = useStateFirebase();

  const [
    values, errors, handleChange, handleBlur, handleSubmit,
  // eslint-disable-next-line no-use-before-define
  ] = useValidationForm(initialState, validationRegister, userRegister);

  const { name, email, password } = values;

  // hoisting
  async function userRegister() {
    try {
      const userName = NameToUpperCase(name);
      await firebase.register(userName, email, password);

      Router.push('/');
    } catch (error) {
      console.log(`Hubo un error al crear el ususario: ${error.message}`);
      setErrorRegister(error.message);
    }
  }

  return (

    <Layout
      title="Regístrate"
      description="Regístrate para tener acceso a millónes de películas, series y todos los programas que te puedas imaginar"
      keywords="MR, Movies, películas, series, documentales, programas, program"

    >
      <Form2
        onSubmit={handleSubmit}
      >
        <Container>
          <Legend>
            Crear Cuenta
          </Legend>
          {errors.name && (
          <p className="errorP">
            *
            {errors.name}
          </p>
          )}
          <label htmlFor="name">
            Nombre Completo
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nombre y apellido"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </label>
          {errors.email && (
          <p className="errorP">
            *
            {errors.email}
          </p>
          )}
          <label htmlFor="email">
            Correo
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Correo"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </label>
          {errors.password && (
          <p className="errorP">
            *
            {errors.password}
          </p>
          )}
          <label htmlFor="password">
            Contraseña
            <input
              className="lastLabel"
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}

            />

          </label>
          <Button2
            type="submit"
            background="#d00f0f"
            color="white"
            height="2.5rem"
            width="100%"
            font="1rem"

          >
            Registrarse
          </Button2>
          {errorRegister && (
          <p className="errorP">
            *
            {errorRegister}
          </p>
          )}
        </Container>
      </Form2>
      <style jsx>
        {`
        .errorP {
          color: red;
          font-size: .7rem;
          font-weight: 700;
          margin: .3rem 0 0 0;
        }

        .lastLabel {
          margin-bottom: 3rem;
        }

        @media screen and (max-width: 320px) {
          .lastLabel {
            margin-bottom: 1rem;
          }

          .errorP {
          font-size: .5rem;

          }
        }

        @media screen and (min-width: 767px) {
          .lastLabel {
            margin-bottom: 4rem;
          }

          .errorP {
            font-size: 1rem;
  
            }
        }

        @media screen and (min-width: 1023px) {
          .lastLabel {
            margin-bottom: 6rem;
          }
          .errorP {
            font-size: 1.2rem;
  
            }
      
        }

        @media screen and (min-width: 1200px) {
          .lastLabel {
            margin-bottom: 5rem;
          }
      `}
      </style>
    </Layout>

  );
};

export default Register;
