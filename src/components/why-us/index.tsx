import * as React from 'react';
import styles from './why-us.module.css';
import Section from '../section';
import Grid from '../grid';

const WhyUs: React.FunctionComponent = () => {
  return (
    <Section className={styles.greySection}>
      <h2 className="centered color-bar">Why us?</h2>
      <Grid columns={3}>
        <div>
          <div className={styles.subheader}>Front-end development natives</div>
          Thought leaders and active contributors to front-end community.
        </div>
        <div>
          <div className={styles.subheader}>Effective teams</div>
          We choose our teams carefully. Our people are the secret to great
          work.
        </div>
        <div>
          <div className={styles.subheader}>Quick turnaround</div>
          Rapid development with our battle-tested patterns and starter kits.
        </div>
        <div>
          <div className={styles.subheader}>Agile by default</div>
          Predictable delivery with focus on business value, UX and code
          quality.
        </div>
        <div>
          <div className={styles.subheader}>Competitive rates</div>
          Better value for money without code quality compromises. Get a free
          quote!
        </div>
        <div>
          <div className={styles.subheader}>Full money back guarantee</div>
          100% satisfaction with our work or your money back. No strings
          attached.
        </div>
      </Grid>
    </Section>
  );
};

export default WhyUs;
