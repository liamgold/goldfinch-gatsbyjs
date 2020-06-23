import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import SrOnly from './SrOnly';

interface FooterProps {
  className?: string;
}

const Container: React.FC<FooterProps> = ({ className }) => (
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
  border-top: 5px solid #222;
`;

export default Footer;
