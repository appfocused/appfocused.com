import * as React from 'react';
import styles from './tech.module.css';

import { ReactComponent as awsLogo } from '../../assets/tech-logos/aws-01.svg';
import { ReactComponent as reactLogo } from '../../assets/tech-logos/react-01.svg';
import { ReactComponent as reduxLogo } from '../../assets/tech-logos/redux-01.svg';
import { ReactComponent as htmlLogo } from '../../assets/tech-logos/html5-01.svg';
import { ReactComponent as cssLogo } from '../../assets/tech-logos/css3-01.svg';
import { ReactComponent as jsLogo } from '../../assets/tech-logos/js-01.svg';
import { ReactComponent as tsLogo } from '../../assets/tech-logos/ts-01.svg';
import { ReactComponent as vueLogo } from '../../assets/tech-logos/vue-01.svg';
import { ReactComponent as meteorLogo } from '../../assets/tech-logos/meteor-01.svg';
import { ReactComponent as nodeLogo } from '../../assets/tech-logos/nodejs-01.svg';
import { ReactComponent as webpackLogo } from '../../assets/tech-logos/webpack-01.svg';
import { ReactComponent as sassLogo } from '../../assets/tech-logos/sass-01.svg';
import { ReactComponent as electronLogo } from '../../assets/tech-logos/electron.svg';
import { ReactComponent as postcssLogo } from '../../assets/tech-logos/postcss.svg';
import { ReactComponent as webComponents } from '../../assets/tech-logos/web-components.svg';
import Section from '../section';

interface ITechnology {
  src: string;
  alt: string;
}

const technologies: ITechnology[] = [
  { src: htmlLogo, alt: 'HTML5' },
  { src: jsLogo, alt: 'JavaScript' },
  { src: tsLogo, alt: 'TypeScript' },
  { src: nodeLogo, alt: 'NodeJS' },
  { src: webComponents, alt: 'Web Components' },
  { src: reactLogo, alt: 'React' },
  { src: vueLogo, alt: 'Vue' },
  { src: reduxLogo, alt: 'Redux' },
  { src: postcssLogo, alt: 'PostCSS' },
  { src: awsLogo, alt: 'AWS' },
  { src: electronLogo, alt: 'Electron' }
];

const Tech: React.FunctionComponent = () => {
  return (
    <Section className={styles.darkSection}>
      <h2 className="centered color-bar">Tech choices</h2>
      <svg
        style={{ width: 0, height: 0, position: 'absolute' }}
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="tech-gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary-color-main)" />
          <stop offset="100%" stopColor="var(--secondary-color-main)" />
        </linearGradient>
      </svg>
      <ul className={styles.tech}>
        {technologies.map(({ src: Logo, alt }, index) => (
          <li key={`tech-${index}`}>
            <Logo />
            <span>{alt}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Tech;
