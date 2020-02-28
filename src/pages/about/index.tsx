import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/hero';
import Layout from '../../components/layout/layout';
import Section from '../../components/section';
import Grid from '../../components/grid';

import * as styles from './index.module.css';
import HeroSubpage from '../../components/hero-subpage/hero-subpage';

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
          <title>About us - Appfocused UI Development agency</title>
          <meta
            name="description"
            content="About us - Appfocused UI Development agency"
          />
        </Helmet>
        <HeroSubpage title="Great user experiences. Implemented."></HeroSubpage>
        <Section>
          <h2>Welcome to Appfocused</h2>
          <Grid>
            <div>
              <p style={{ maxWidth: '700px' }}>
                Appfocused is a software development agency with head quarters
                in London, UK. Our specialisation is all things front-end — user
                interfaces on web, mobile and desktop and their integration with
                underlying systems, services or databases.
              </p>
              <p style={{ maxWidth: '700px' }}>
                We’re creatively led, and strategically minded — existing to
                create transformative digital experiences for our clients.
                Whether you need to build a proof of concept or an
                enterprise-grade application, integrate a backend system or
                tweak performance to achieve higher conversion rates, our team
                will work with you to bring a high-quality digital product to
                life, helping you meet the realities of today and tomorrow.
              </p>
              <p style={{ maxWidth: '700px' }}>
                Since late 2000s the front-end domain has been growing into a
                new paradigm, and this has introduced a fundamental shift in the
                way we develop modern web applications. JavaScript run-time and
                ecosystem became capable of delivering complex ans sophisticated
                web applications on client and server, mobile and desktop. That
                in turn required a whole new expertise, comprised of JavaScript
                as the core programming language and ajacent disciplines like
                Accessibility, Animation, Data Visualisation, Responsive Layouts
                to bridge the gap between UI designers and backend developers.
              </p>
            </div>
          </Grid>
        </Section>
      </Layout>
    </div>
  );
};
