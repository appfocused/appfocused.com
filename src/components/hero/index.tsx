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

import InventicaLogo from '../../assets/client-logos/inventica.svg';
import { ReactComponent as ScLogo } from '../../assets/client-logos/sc.svg';
import { ReactComponent as GsLogo } from '../../assets/client-logos/gs.svg';
import { ReactComponent as JohnLewisLogo } from '../../assets/client-logos/john-lewis.svg';
import { ReactComponent as ClarksLogo } from '../../assets/client-logos/clarks.svg';
import { ReactComponent as DeloitteLogo } from '../../assets/client-logos/deloitte.svg';
import { ReactComponent as AegonLogo } from '../../assets/client-logos/aegon.svg';

const clients = [DeloitteLogo, GsLogo, ScLogo, JohnLewisLogo, AegonLogo];

const Hero: React.FunctionComponent = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: '10px',
    from: { opacity: 0, marginTop: '-100px' },
    delay: 500
  });

  const propsTitle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 750
  });

  const propsLogos = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { transform: 'scale(0)' },
    delay: 1000
  });

  return (
    <section className={styles.hero}>
      <animated.div className={styles.header} style={props}>
        Great user experiences. Implemented.
      </animated.div>
      <animated.div className={styles.clientsContainer} style={propsTitle}>
        <animated.div className={styles.clientsTitle} style={propsTitle}>
          Trusted by
        </animated.div>
        <animated.div className={styles.clients} style={propsLogos}>
          {clients.map((Logo, index) => (
            <Logo key={`tech-${index}`} />
          ))}
        </animated.div>
      </animated.div>
    </section>
  );
};
export default Hero;
