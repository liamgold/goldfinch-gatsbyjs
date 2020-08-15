import React, { FunctionComponent } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import Main from '@components/shared/Main';
import SEO from '@components/shared/SEO';
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
  image?: string;
  article?: boolean;
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

const Container: FunctionComponent<LayoutProps> = ({ title, description, image, article, children, className }) => (
  <ThemeProvider theme={theme}>
    <div className={className}>
      <GlobalStyle />
      <SEO title={title} description={description} image={image} article={article} />
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
