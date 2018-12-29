import * as React from 'react';
import * as styles from './footer.module.css';

interface IProps {
  hasScroll: boolean;
}

const Footer = React.memo(({ hasScroll }: IProps) => (
  <footer className={styles.footer}>
    <p>
      2018 &copy; Appfocused Limited. All rights reserved.<br />
      Appfocused Limited is a company registered in England and Wales with
      company number 10477647
    </p>
  </footer>
));

export default Footer;
