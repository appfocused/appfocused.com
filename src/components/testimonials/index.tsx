import * as React from 'react';
import * as cx from 'classnames';
import * as styles from './testimonials.module.css';

export interface ITestimonial {
  quote: string;
  title: string;
  name: string;
  company: string;
}

interface IProps {
  testimonials: ITestimonial[];
  children?: any;
}

const Testimonials = (props: IProps) => {
  const { name, quote, company, title } = props.testimonials[0];
  return (
    <div className={styles.container}>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.name}>
        {name},
        <br />
        {title},
        <br />
        {company}
      </p>
    </div>
  );
};

export default Testimonials;
