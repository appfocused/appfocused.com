import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/hero';
import Layout from '../../components/layout/layout';
import Section from '../../components/section';
import Grid from '../../components/grid';
import ExpertsContent from './experts.mdx';

import * as styles from './index.module.css';

const process = require('../../assets/process.svg');

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
          <Grid>
            <div>
              <ExpertsContent />
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
