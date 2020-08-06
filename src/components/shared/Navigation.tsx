import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { styled } from '@utils/theme';

interface NavigationProps {
  className?: string;
}

const Container: FunctionComponent<NavigationProps> = ({ className }) => (
  <nav className={className}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </nav>
);

const Navigation = styled(Container)`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;

    li {
      margin: 0 15px 0 0;

      &:last-of-type {
        margin: 0;
      }
    }
  }
`;

export default Navigation;
