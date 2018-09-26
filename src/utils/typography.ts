import * as Typography from 'typography';
import theme from 'typography-theme-wordpress-2016';

theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none'
  }
});

// delete theme.googleFonts;

const typography = new (Typography as any)({
  title: 'Appfocused',
  baseFontSize: '16px',
  baseLineHeight: 1.75,
  scaleRatio: 4.5,
  googleFonts: [
    {
      name: 'Roboto Mono',
      styles: ['300']
    },
    {
      name: 'Roboto',
      styles: ['300', '300i', '400', '400i', '700']
    }
  ],
  headerFontFamily: ['Roboto', 'sans-serif'],
  bodyFontFamily: ['sans-serif'],
  bodyColor: 'hsla(0,0%, 0%, 0.9)',
  bodyWeight: 300,
  includeNormalize: false
});

console.log(typography.rhythm);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
