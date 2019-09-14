/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Container } from './Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <Container>
    <span
      css={css`
        font-weight: bold;
      `}
    >
      Liam Goldfinch
    </span>
    <a
      href="https://github.com/liamgold/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon
        icon={faGithubSquare}
        css={css`
          font-size: 30px;
        `}
      />
    </a>
  </Container>
);

export default Footer;
