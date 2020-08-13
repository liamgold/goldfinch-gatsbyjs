import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import Main from '@components/shared/Main';
import { styled, theme } from '@utils/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.colour.white};
    color: ${theme.colour.darkGrey}
  }
  a {
    font-weight: bold;
    color: ${theme.colour.darkGrey}
  }
`;

interface LayoutProps {
  title?: string;
  description?: string;
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

const Container: FunctionComponent<LayoutProps> = ({ title, description, children, className }) => (
  <ThemeProvider theme={theme}>
    <div className={className}>
      <GlobalStyle />
      <Helmet
        title={!title ? 'Liam Goldfinch | .NET Developer' : title}
        meta={[
          {
            name: 'theme-color',
            content: '#444444',
          },
          {
            name: 'author',
            content: 'Liam Goldfinch',
          },
          { name: 'description', content: !description ? '.NET Developer, based in Leeds, England.' : description },
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
