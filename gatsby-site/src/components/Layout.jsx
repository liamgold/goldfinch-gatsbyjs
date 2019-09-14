import React from 'react';
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';
import Main from 'components/shared/Main';
import GlobalStyles from 'utils/globalStyles';
import { Wrapper } from './Layout.styles';

const Layout = ({ children }) => (
  <Wrapper>
    <Global styles={GlobalStyles} />
    <Helmet
      meta={[
        {
          name: `theme-color`,
          content: `#212121`,
        },
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
    <Main>{children}</Main>
    <Footer />
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
