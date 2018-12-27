import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/hero';
import Layout from '../../components/layout/layout';
import Section from '../../components/section';
import Grid from '../../components/grid';

import * as styles from './index.module.css';

interface IProps {
  location: {
    pathname: string;
  };
}

export default (props: IProps) => {
  // const data = props.data.markdownRemark;
  return (
    <div className={styles.content}>
      <Layout>
        <Helmet>
          <title>
            Front-end Development Services - Appfocused UI Development agency
          </title>
          <meta
            name="description"
            content="Front-end Development Services - Appfocused UI Development agency"
          />
        </Helmet>
        <Section>
          <Grid>
            <div>
              <h2>Test</h2>
              <p>lorem ipsum</p>
              <p>lorem ipsum</p>
            </div>
          </Grid>
        </Section>
      </Layout>
    </div>
  );
};
