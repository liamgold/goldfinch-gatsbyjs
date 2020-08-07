import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { styled } from '@utils/theme';
import logo from '@assets/liam.jpg';
import SrOnly from '@components/shared/SrOnly';

interface HeaderInformationProps {
  className?: string;
}

const Container: FunctionComponent<HeaderInformationProps> = ({ className }) => (
  <section className={className}>
    <Link to="/">
      <SrOnly text="Liam Goldfinch" />
      <img src={logo} alt="Liam Goldfinch" style={{ width: '100px', borderRadius: '6px', marginBottom: '0' }} />
    </Link>
    <div>
      <p>Liam Goldfinch</p>
      <p>.NET developer</p>
    </div>
  </section>
);

const HeaderInformation = styled(Container)`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 20px;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;

  a {
    height: 100px;
    width: 100px;
  }

  p {
    margin-bottom: 10px;
    font-size: 14px;

    &:last-of-type {
      margin: 0;
    }
  }
`;

export default HeaderInformation;
