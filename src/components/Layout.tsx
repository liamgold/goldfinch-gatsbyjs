import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from '@components/shared/Footer';
import Header from '@components/shared/Header';
import Main from '@components/shared/Main';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ffffff;
  }
  a {
    color: inherit;
    font-weight: bold;
  }
`;

interface LayoutProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

const Container: React.FC<LayoutProps> = ({ children, className }) => (
  <div className={className}>
    <GlobalStyle />
    <Helmet
      meta={[
        {
          name: 'theme-color',
          content: '#212121',
        },
        {
          name: 'author',
          content: 'Liam Goldfinch',
        },
        {
          name: 'description',
          content: '.NET Developer, based in Leeds, England.',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </div>
);

const Layout = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
