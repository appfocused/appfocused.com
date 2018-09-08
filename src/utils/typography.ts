import * as Typography from 'typography';
import theme from 'typography-theme-wordpress-2016';

theme.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
});

// delete theme.googleFonts;

const typography = new (Typography as any)(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
