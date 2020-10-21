import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../headerFolder/Header/index';
import Footer from '../Footer/index';


const Layout = ({
  // eslint-disable-next-line react/prop-types
  title, description, keywords, children,
}) => (
  <>
    <Head>
      <title>
        MR ||
        {' '}
        {title}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default Layout;
