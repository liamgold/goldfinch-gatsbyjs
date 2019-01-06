import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Logo from "assets/logo.svg";

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/" className="logo">
      <span className="sr-only">{siteTitle}</span>
      <Logo />
    </Link>
    {/* <nav className="navigation" role="navigation">
      <ul>
        <li>
          <a className="logo-link" href="/">
            Home
          </a>
        </li>
      </ul>
    </nav> */}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

export default Header;
