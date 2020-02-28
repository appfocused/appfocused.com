import * as React from 'react';
import styles from './hero-subpage.module.css';
import cx from 'classnames';
import { ReactComponent as Dev } from '../../assets/front-end-development.svg';

interface IProps {
  title: string;
  text?: string;
  buttonText?: string;
  onButtonClick?: (e: any) => void;
}

const HeroSubpage: React.FunctionComponent<IProps> = props => {
  const classes = cx({
    [styles.container]: true
  });

  return (
    <section className={classes}>
      <div className={styles.section}>
        <h1 className={styles.header}>{props.title}</h1>
        <p className={styles.text}>{props.text}</p>
        <button className={styles.button} onClick={props.onButtonClick}>
          {props.buttonText}
        </button>
      </div>
      <Dev className={styles.image} />
    </section>
  );
};

export default HeroSubpage;
