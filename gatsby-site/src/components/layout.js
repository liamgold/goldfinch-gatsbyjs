import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';

const Layout = ({ children }) => (
  <Fragment>
    <Helmet
      meta={[
        {
          name: `author`,
          content: `Liam Goldfinch`,
        },
        {
          name: `description`,
          content: `.NET Developer, based in Leeds, England.`,
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <main>{children}</main>
    <footer>
      <p>Liam Goldfinch</p>
    </footer>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
