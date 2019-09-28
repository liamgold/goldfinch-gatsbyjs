/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

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

const SrOnly = ({ text }) => <span css={srOnly}>{text}</span>;

SrOnly.propTypes = {
  text: PropTypes.string,
};

export default SrOnly;
