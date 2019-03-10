import { css } from '@emotion/core';

export default css`
  body {
    background: #efefef;
  }
  .main {
    flex: 1;
    margin: 2em;

    a {
      background: #efefef;
      color: #222;
      border-bottom: 1px solid #222;
      text-decoration: none;
      transition: background 0.25s ease, color 0.25s ease;

      &:hover {
        background: #222;
        color: #efefef;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    border-top: 5px solid #222;

    &__title {
      font-weight: bold;
    }
  }
`;
