import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colour: {
    white: '#f8f8ff',
    grey: '#444444',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
