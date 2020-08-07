import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import { styled } from '@utils/theme';
import SrOnly from '@components/shared/SrOnly';

interface SocialMediaProps {
  className?: string;
}

const Container: FunctionComponent<SocialMediaProps> = ({ className }) => (
  <div className={className}>
    <a href="https://github.com/liamgold/" target="_blank" rel="noopener noreferrer">
      <SrOnly text="GitHub" />
      <FontAwesomeIcon icon={faGithubSquare} style={{ fontSize: '30px' }} />
    </a>
    <a href="https://twitter.com/LiamGoldfinch" target="_blank" rel="noopener noreferrer">
      <SrOnly text="Twitter" />
      <FontAwesomeIcon icon={faTwitterSquare} style={{ fontSize: '30px' }} />
    </a>
  </div>
);

const SocialMedia = styled(Container)`
  display: flex;
  justify-content: flex-end;

  a {
    margin-left: 10px;
  }
`;

export default SocialMedia;
