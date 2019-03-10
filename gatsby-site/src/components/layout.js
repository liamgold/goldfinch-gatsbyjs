import React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from 'components/header';
import GlobalStyles from 'utils/globalStyles';

const Wrapper = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding: 10px;
`;

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
    <main className="main">{children}</main>
    <footer className="footer">
      <span className="footer__title">Liam Goldfinch</span>
    </footer>
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
