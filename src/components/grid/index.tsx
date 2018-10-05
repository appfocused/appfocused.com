import * as React from 'react';
import * as styles from './grid.module.css';

const style = (col: number) => ({
  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`
});

const Grid = ({ columns = 3, children }: any) => (
  <section className={styles.wrapper} style={style(columns)}>
    {children}
  </section>
);

export default Grid;
