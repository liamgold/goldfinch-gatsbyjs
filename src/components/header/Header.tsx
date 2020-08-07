import React, { FunctionComponent } from 'react';

import { styled } from '@utils/theme';
import Navigation from '@components/header/Navigation';
import HeaderInformation from '@components/header/HeaderInformation';

interface HeaderProps {
  className?: string;
}

const Container: FunctionComponent<HeaderProps> = ({ className }) => (
  <header className={className}>
    <HeaderInformation />
    <Navigation />
  </header>
);

const Header = styled(Container)`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme.colour.grey};
`;

export default Header;
