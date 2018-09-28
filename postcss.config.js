const postcssPresetEnv = require(`postcss-preset-env`);
const autoprefixer = require('autoprefixer');
const browserReporter = require('postcss-browser-reporter');
const customMedia = require('postcss-custom-media');
const cssImport = require('postcss-import');

const nested = require('postcss-nested');
const pxToRem = require('postcss-pxtorem');
const reporter = require('postcss-reporter');
const simpleVars = require('postcss-simple-vars');
const url = require('postcss-url');
const mixins = require('postcss-mixins');

module.exports = () => ({
  plugins: [
    cssImport({
      addModulesDirectories: ['node_modules']
    }),
    url(),
    simpleVars(),
    mixins(),
    postcssPresetEnv({
      stage: 2,
      browsers: 'last 2 versions',
      features: {
        'nesting-rules': false
      }
    }),
    customMedia(),
    browserReporter(),
    nested(),
    browserReporter(),
    reporter(),
    // pxToRem(),
    autoprefixer()
  ]
});
