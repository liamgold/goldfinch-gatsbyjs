import { css } from '@emotion/core';

export default css`
  body {
    background: #ffffff;
  }
  a {
    position: relative;
    color: #222;
    text-decoration: none;
    transition: background 0.25s ease, color 0.25s ease;
  }
  a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #222;
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
