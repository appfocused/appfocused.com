import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/hero';
import Layout from '../../components/layout/layout';
import Section from '../../components/section';
import Grid from '../../components/grid';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as styles from './index.module.css';
import { ContactForm } from '../../components/contact-form';

import CodeSvg from '../../assets/code.svg';

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

const handleSubmit = (e: React.SyntheticEvent) => {
  e.preventDefault();
  console.log(e);
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
        <ToastContainer />
        <Hero />
        <Section>
          <Grid columns={1}>
            <div>
              <h2 className="centered">User Interface Experts</h2>
              <p className="centered-text-block">
                We are a team of software engineers specialising in executing
                complex business-critical user&nbsp;interfaces on the web,
                desktop and mobile&nbsp;platforms. Accomplished UI execution not
                only brings the application to life, but also makes it secure
                and performant, available on different media and screen sizes,
                accessible for disabled users and many more. These are the
                features that your end-users care deeply about and our mission
                is to help your business to get&nbsp;it&nbsp;right.
              </p>
            </div>
          </Grid>
        </Section>
        <Section style={{ backgroundColor: '#eee' }}>
          <h2 className="centered">How can we help?</h2>
          <Grid columns={3}>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconDesign}`} />
              <h3>Web</h3>
              <p>
                Web applications development is our core area of expertise and
                passion. Not only we know how to build slick and functional
                front-ends, but we also have a good insight on how to integrate
                it into your existing services and&nbsp;platforms.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconCode}`} />
              <h3>Desktop</h3>
              <p>
                Modern frameworks such as Electron and Openfin allow us to reuse
                our web expertise to rapidly produce complex and secure desktop
                applications for Windows, Mac and Linux, allowing to reduce time
                to market for multi-platform apps.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconQuality}`} />
              <h3>Mobile</h3>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconDesign}`} />
              <h3>Code reviews and audit</h3>
              <p>
                Understanding risks and technical debts now can pay off
                considerably in the future. We thoroughly analyse your web
                application to surface risks and to provide you with immediately
                actionable&nbsp;plan.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconCode}`} />
              <h3>Rescue mission</h3>
              <p>
                Our in-depth understanding of web technologies and a set of
                proven debug techniques allow us to find and eliminate defects
                and performance issues in your existing app within
                short&nbsp;timeframes.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconQuality}`} />
              <h3>Hiring help</h3>
              <p>
                The right mix of tech interviews, live coding and problem
                solving exercises allows us to cherry pick the best
                technically-apt web developers, assess their seniority and
                validate their track&nbsp;record.
              </p>
            </div>
          </Grid>
        </Section>
        <Section>
          <Grid columns={1}>
            <div>
              <h2 name="contacts">Have a project in mind?</h2>
              <ContactForm />
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
