/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';
import logo from 'assets/liam.jpg';
import SrOnly from './SrOnly';
import { Container, Heading } from './Header.styles';

const Header = () => (
  <Container>
    <Link to="/">
      <SrOnly text="Liam Goldfinch" />
      <img
        src={logo}
        alt="Liam Goldfinch"
        css={css`
          width: 150px;
          border-radius: 6px;
          margin-bottom: 0;
        `}
      />
    </Link>
    <Heading>Liam Goldfinch</Heading>
  </Container>
);

export default Header;
