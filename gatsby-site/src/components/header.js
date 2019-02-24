/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Logo from 'assets/logo.svg';

const srOnly = css`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const Header = () => (
  <header>
    <Link to="/" className="logo">
      <span css={srOnly}>Liam Goldfinch</span>
      <Logo
        css={css`
          width: 200px;
        `}
      />
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
