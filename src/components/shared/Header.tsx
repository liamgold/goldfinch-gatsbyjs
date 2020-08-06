import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { styled } from '@utils/theme';
import logo from '@assets/liam.jpg';
import Navigation from './Navigation';
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
    <Navigation></Navigation>
  </header>
);

const Header = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  max-width: 640px;
  padding: 20px;
`;

export default Header;
