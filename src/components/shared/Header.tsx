import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import logo from '@assets/liam.jpg';
import SrOnly from './SrOnly';

interface HeaderProps {
  className?: string;
}

const Container: React.FC<HeaderProps> = ({ className }) => (
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
