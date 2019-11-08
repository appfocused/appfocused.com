import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import * as styles from './hero.module.css';

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
