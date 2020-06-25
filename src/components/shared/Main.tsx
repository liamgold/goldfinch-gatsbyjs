import React from 'react';

import { styled } from '@utils/theme';

interface MainProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

const Container: React.FC<MainProps> = ({ className, children }) => <main className={className}>{children}</main>;

const Main = styled(Container)`
  flex: 1;
  width: 100%;
  max-width: 640px;
  padding: 20px;
`;

export default Main;
