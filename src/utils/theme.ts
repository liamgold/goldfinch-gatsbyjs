import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colour: {
    white: '#ffffff',
    offWhite: '#f8f8ff',
    grey: '#ebebeb',
    darkGrey: '#444444',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
