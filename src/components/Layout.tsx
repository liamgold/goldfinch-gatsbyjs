import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Footer from '@components/shared/Footer';
import Header from '@components/shared/Header';
import Main from '@components/shared/Main';
import { styled, theme } from '@utils/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.colour.white};
    color: ${theme.colour.grey}
  }
  a {
    font-weight: bold;
    color: ${theme.colour.grey}
  }
`;

interface LayoutProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

const Container: React.FC<LayoutProps> = ({ children, className }) => (
  <ThemeProvider theme={theme}>
    <div className={className}>
      <GlobalStyle />
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: '#444444',
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
  </ThemeProvider>
);

const Layout = styled(Container)`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
