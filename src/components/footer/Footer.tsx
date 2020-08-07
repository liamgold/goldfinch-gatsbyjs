import React, { FunctionComponent } from 'react';

import { styled } from '@utils/theme';
import SocialMedia from '@components/footer/SocialMedia';

interface FooterProps {
  className?: string;
}

const Container: FunctionComponent<FooterProps> = ({ className }) => (
  <footer className={className}>
    <span style={{ fontWeight: 'bold' }}>Liam Goldfinch</span>
    <SocialMedia />
  </footer>
);

const Footer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: ${props => props.theme.colour.grey};
`;

export default Footer;
