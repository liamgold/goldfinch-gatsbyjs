/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';
import Logo from 'assets/logo.svg';
import SrOnly from './SrOnly';
import { Container } from './Header.styles';

const Header = () => (
  <Container>
    <Link to="/">
      <SrOnly text="Liam Goldfinch" />
      <Logo
        css={css`
          width: 200px;
        `}
      />
    </Link>
  </Container>
);

export default Header;
