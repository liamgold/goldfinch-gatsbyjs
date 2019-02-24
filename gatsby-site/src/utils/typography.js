import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['700'],
    },
    {
      name: 'Open Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Roboto', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
});

export default typography;
