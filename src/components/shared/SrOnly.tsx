import React from 'react';
import styled from 'styled-components';

interface SrOnlyProps {
  className?: string;
  text: string;
}

const Container: React.FC<SrOnlyProps> = ({ className, text }) => <span className={className}>{text}</span>;

const SrOnly = styled(Container)`
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export default SrOnly;
