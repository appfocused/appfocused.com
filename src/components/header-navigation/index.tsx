import * as React from 'react';
import Logo from '../logo';

import * as styles from './header-navigation.module.css';

console.log({ styles });

const HeaderNavigation = () => (
  <nav className={styles.navbar}>
    <Logo />
  </nav>
);

export default HeaderNavigation;
