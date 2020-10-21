/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import '../public/styles/main.css';

// eslint-disable-next-line no-unused-vars
import App from 'next/app';

import firebase, { StateProviderFirebase } from '../firebase/context';
import useAuth from '../hooks/useAuth';

function MyApp({ Component, pageProps }) {
  const user = useAuth();
  return (
    <StateProviderFirebase
      value={{
        user,
        firebase,
      }}
    >
      <Component {...pageProps} />
    </StateProviderFirebase>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
