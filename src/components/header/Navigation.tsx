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
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colour.grey};
  padding: 0 20px;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;

    li {
      padding: 0;
      margin: 0;

      a {
        position: relative;
        padding: 20px;
        line-height: 64px;
        margin: 0;
        text-decoration: none;

        &:hover::after {
          content: ' ';
          background: ${props => props.theme.colour.darkGrey};
          position: absolute;
          left: 0;
          bottom: 0;
          height: 5px;
          width: 100%;
        }
      }
    }
  }
`;

export default Navigation;
