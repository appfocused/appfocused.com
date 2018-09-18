import * as React from 'react';
import * as styles from './Hero.module.css';

const reactLogo = require('../../assets/tech-logos/react-01.svg');
const reduxLogo = require('../../assets/tech-logos/redux-01.svg');
const htmlLogo = require('../../assets/tech-logos/html5-01.svg');
const cssLogo = require('../../assets/tech-logos/css3-01.svg');
const jsLogo = require('../../assets/tech-logos/js-01.svg');
const tsLogo = require('../../assets/tech-logos/ts-01.svg');
const vueLogo = require('../../assets/tech-logos/vue-01.svg');
const meteorLogo = require('../../assets/tech-logos/meteor-01.svg');
const nodeLogo = require('../../assets/tech-logos/nodejs-01.svg');
const webpackLogo = require('../../assets/tech-logos/webpack-01.svg');
// const sassLogo = require('../../assets/tech-logos/sass-01.svg');
const postcssLogo = require('../../assets/tech-logos/postcss.svg');

interface ITechnology {
  src: string;
  alt: string;
}

const technologies: ITechnology[] = [
  { src: htmlLogo, alt: 'HTML5' },
  { src: cssLogo, alt: 'CSS3' },
  { src: jsLogo, alt: 'JavaScript' },
  { src: tsLogo, alt: 'TypeScript' },
  { src: nodeLogo, alt: 'NodeJS' },
  { src: postcssLogo, alt: 'PostCSS' },
  { src: reactLogo, alt: 'React' },
  { src: reduxLogo, alt: 'Redux' },
  { src: vueLogo, alt: 'Vue' },
  { src: meteorLogo, alt: 'Meteor' },
  { src: webpackLogo, alt: 'Webpack' }
];

const Hero = () => (
  <section className={styles.hero}>
    <h1 className={styles.header}>Great user experiences. Implemented.</h1>
    <h3 className={styles.subheader}>
      we&nbsp;know the ropes of&nbsp;front&#8209;end&nbsp;development
    </h3>
    <ul className={styles.tech}>
      {technologies.map(({ src, alt }, index) => (
        <li key={`tech-${index}`}>
          <img src={src} alt={alt} />
          <span>{alt}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Hero;
