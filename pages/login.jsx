/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

// api router
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Container, Legend, Href, Form } from '../public/styles/stylesForm';
import { Button2 } from '../public/styles/stylesButtons';


import Layout from '../components/Layout/index';


// validations
import useValidationForm from '../hooks/useValidationForm';
import validationLogin from '../validation/validationLogin';

import { useStateFirebase } from '../firebase/context';

const Register = () => {
  const [errorRegister, setErrorRegister] = useState(null);

  const Router = useRouter();

  const initialState = {
    email: '',
    password: '',
  };

  // values context firebase
  const { firebase } = useStateFirebase();

  const [
    values, errors, handleChange, handleBlur, handleSubmit,
  // eslint-disable-next-line no-use-before-define
  ] = useValidationForm(initialState, validationLogin, userLogin);

  const { email, password } = values;

  async function userLogin() {
    try {
      await firebase.login(email, password);

      Router.push('/');
    } catch (error) {
      console.log(`Hubo un error al autenticar al usuario ${error.message}`);
      setErrorRegister(error.message);
    }
  }


  return (

    <Layout
      title="Inicia sesión"
      description="Inicia sesión para tener acceso a millónes de películas, series y todos los programas que te puedas imaginar"
      keywords="MR, Movies, películas, series, documentales, programas, program"
    >
      <Form
        onSubmit={handleSubmit}
      >
        <Container>
          <Legend>
            Inicia sesión
          </Legend>
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
            Iniciar sesión
          </Button2>
          {errorRegister && (
          <p className="errorP">
            *
            {errorRegister}
          </p>
          )}

          <Link href="/register" passHref>
            <Href>
              ¿ No tienes una cuenta ?
            </Href>
          </Link>

        </Container>
      </Form>
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
      
        }
      `}
      </style>
    </Layout>

  );
};

export default Register;
