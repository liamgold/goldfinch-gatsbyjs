import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { styled } from '@utils/theme';
import logo from '@assets/liam.jpg';
import SrOnly from './SrOnly';

interface HeaderProps {
  className?: string;
}

const Container: FunctionComponent<HeaderProps> = ({ className }) => (
  <header className={className}>
    <Link to="/">
      <SrOnly text="Liam Goldfinch" />
      <img src={logo} alt="Liam Goldfinch" style={{ width: '150px', borderRadius: '6px', marginBottom: '0' }} />
    </Link>
    <h2 style={{ marginBottom: '0' }}>Liam Goldfinch</h2>
  </header>
);

const Header = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 640px;
  padding: 20px;
`;

export default Header;
