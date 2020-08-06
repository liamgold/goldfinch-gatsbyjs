import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import { styled } from '@utils/theme';
import SrOnly from './SrOnly';

interface FooterProps {
  className?: string;
}

const Container: FunctionComponent<FooterProps> = ({ className }) => (
  <footer className={className}>
    <span style={{ fontWeight: 'bold' }}>Liam Goldfinch</span>
    <a href="https://github.com/liamgold/" target="_blank" rel="noopener noreferrer">
      <SrOnly text="GitHub" />
      <FontAwesomeIcon icon={faGithubSquare} style={{ fontSize: '30px' }} />
    </a>
  </footer>
);

const Footer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 640px;
  padding: 20px;
  border-top: 5px solid ${props => props.theme.colour.grey};
`;

export default Footer;
