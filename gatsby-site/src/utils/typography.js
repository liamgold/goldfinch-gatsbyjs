import Typography from 'typography';

const typography = new Typography({
  bodyFontFamily: ['Open Sans', 'sans-serif'],
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
  scaleRatio: 1.4,
});

export default typography;
