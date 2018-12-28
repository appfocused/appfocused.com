import * as React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import * as styles from './logo.module.css';

const Logo = () => (
  <AniLink className={`logo ${styles.logo}`} to="/" direction="top" cover>
    <span className={styles.logoPrimary}>app</span>
    <span className={styles.logoDefault}>.</span>
    <span className={styles.logoSecondary}>focused</span>
    <span className={styles.logoDefault}>()</span>
  </AniLink>
);

export default Logo;
