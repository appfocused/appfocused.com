const postcssPresetEnv = require(`postcss-preset-env`);
const autoprefixer = require('autoprefixer');
const browserReporter = require('postcss-browser-reporter');
const customMedia = require('postcss-custom-media');
const cssImport = require('postcss-import');

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 2,
      browsers: 'last 2 versions',
      features: {
        'nesting-rules': true
      }
    }),
    cssImport({
      addModulesDirectories: ['node_modules']
    }),
    customMedia(),
    autoprefixer(),
    browserReporter()
  ]
});
