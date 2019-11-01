import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import * as styles from './hero.module.css';

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

import InventicaLogo from '../../assets/client-logos/inventica.inline.svg';
import GsLogo from '../../assets/client-logos/gs.inline.svg';
import JohnLewisLogo from '../../assets/client-logos/john-lewis.inline.svg';
import DeloitteLogo from '../../assets/client-logos/deloitte.inline.svg';

const clients = [GsLogo, JohnLewisLogo, DeloitteLogo];

const Hero: React.FunctionComponent = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: '10px',
    from: { opacity: 0, marginTop: '-500px' },
    delay: 500
  });

  return (
    <section className={styles.hero}>
      <animated.div className={styles.header} style={props}>
        Great user experiences. Implemented.
      </animated.div>
      <p className={styles.intro}>
        Easy to use interfaces, secure and performant, available on different
        media and screen sizes, accessible for disabled users
      </p>
      <ul className={styles.clients}>
        {clients.map((Logo, index) => (
          <li key={`tech-${index}`}>
            <Logo />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Hero;
