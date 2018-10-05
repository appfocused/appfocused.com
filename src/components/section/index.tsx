import * as React from 'react';
import * as styles from './section.module.css';

interface IProps {
  children: any;
  isFullWidth?: boolean;
  backgroundStyle?: any;
}

const Section = (props: any) => {
  return (
    <section className={styles.section} {...props}>
      <div
        className={`${styles.container} ${
          props.isFullWidth ? styles.fullWidth : ''
        }`}
      >
        {props.children}
      </div>
    </section>
  );
};

export default Section;
