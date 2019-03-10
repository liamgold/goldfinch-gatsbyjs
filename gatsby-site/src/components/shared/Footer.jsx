/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const Footer = () => (
  <footer
    css={css`
      display: flex;
      width: 100%;
      justify-content: flex-end;
      border-top: 5px solid #222;
    `}
  >
    <span
      css={css`
        font-weight: bold;
      `}
    >
      Liam Goldfinch
    </span>
  </footer>
);

export default Footer;
