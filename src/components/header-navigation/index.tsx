import * as React from 'react';
import Logo from '../logo';

import * as styles from './header-navigation.module.css';

const HeaderNavigation = () => (
  <nav className={styles.navbar}>
    <Logo />
  </nav>
);

export default HeaderNavigation;
