import React, { FunctionComponent } from 'react';

import { styled } from '@utils/theme';

interface MainProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

const Container: FunctionComponent<MainProps> = ({ className, children }) => (
  <main className={className}>{children}</main>
);

const Main = styled(Container)`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  padding: 40px 20px;
`;

export default Main;
