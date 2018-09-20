import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout/layout';
import Section from '../components/section';
import Grid from '../components/grid';

import * as styles from './index.module.css';

const process = require('../assets/process.svg');

interface IProps {
  location: {
    pathname: string;
  };
}

const handleClick = (e: any) => {
  e.preventDefault();
  document.querySelector('[name=contacts]').scrollIntoView({
    behavior: 'smooth'
  });
};

export default (props: IProps) => {
  // const data = props.data.markdownRemark;
  return (
    <div className={styles.content}>
      <Layout>
        <Helmet>
          <title>Appfocused: great user experiences. Implemented</title>
          <meta name="description" content="Appfocused" />
        </Helmet>
        <Hero />
        <Section>
          <h2>Front-end development experts</h2>
          <Grid>
            <div>
              <p>
                We&nbsp;are a&nbsp;team of&nbsp;passionate UI&nbsp;Engineers
                ready to&nbsp;roll our sleeves and help your organisation
                to&nbsp;meet your front-end development goals.
              </p>
              <p>
                With a highly technical team of JavaScript experts, we are at
                the leading edge of the newest and rapidly evolving frameworks.
                Having lived and breathed modern web development for more than
                10 years, we know how to tackle its trickiest aspects like
                responsive design, browser compatibility, performance and
                accessibility.
              </p>
              <p>
                We&nbsp;help our clients to&nbsp;rapidly create digital products
                that drive growth, empower and enable an&nbsp;organisation
                to&nbsp;continuously learn, challenge and evolve.
              </p>
              <button className={styles.cta} onClick={handleClick}>
                Let's talk
              </button>
            </div>
            <div>
              <img
                src={process}
                className={styles.img}
                alt="Front-end development process"
              />
            </div>
          </Grid>
        </Section>
      </Layout>
    </div>
  );
};

// export const query = graphql`
//   query HomeQuery {
//     markdownRemark(frontmatter: { title: { eq: "home" } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;
