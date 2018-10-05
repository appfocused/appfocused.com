import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './logo.module.css';

const Logo = () => (
  <Link className={`logo ${styles.logo}`} to="/">
    <span className={styles.logoPrimary}>app</span>
    <span className={styles.logoDefault}>.</span>
    <span className={styles.logoSecondary}>focused</span>
    <span className={styles.logoDefault}>()</span>
  </Link>
);

export default Logo;
