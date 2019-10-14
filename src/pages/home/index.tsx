import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/hero';
import Layout from '../../components/layout/layout';
import Section from '../../components/section';
import Grid from '../../components/grid';
import { Typography } from '@appfocused/ui-components/dist/es';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as styles from './index.module.css';
import { ContactForm } from '../../components/contact-form';

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
                We are a team of software engineers specialised in building
                complex business-critical user&nbsp;interfaces on the web,
                desktop and mobile&nbsp;platforms.
              </p>
            </div>
          </Grid>
        </Section>
        <Section style={{ backgroundColor: '#eee' }}>
          <h2 className="centered">How can we help?</h2>
          <Grid columns={3}>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconDesign}`} />
              <h3>Web apps development</h3>
              <p>
                Web applications development is our core area of expertise and
                passion. Not only we know how to build a slick and functional
                front-end, but we also have a good insight on how to integrate
                it into your existing services and corporate platforms.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconCode}`} />
              <h3>Desktop apps development</h3>
              <p>
                Modern frameworks such as Electron and Openfin allow us to reuse
                our web expertise to rapidly produce complex and secure desktop
                applications for Windows, Mac and Linux. Source code can be
                shared between web and desktop, allowing to reduce time to
                market for multi-platform apps.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconQuality}`} />
              <h3>Mobile apps development</h3>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconDesign}`} />
              <h3>Code reviews and audit</h3>
              <p>
                Understanding risks and technical debts now can pay off
                considerably in the future. A thorough analysis of your web
                application will surface risks, outline improvement
                recommendations and provide you with immediately actionable
                plan.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconCode}`} />
              <h3>Rescue mission</h3>
              <p>
                If you need help with finding out why your app is so slow or
                constantly crashing &mdash; we’ll do a technical audit and fix
                your application within a short timeframe.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconQuality}`} />
              <h3>Hiring help</h3>
              <p>
                We will perform a thorough analysis of your web application that
                is assessing Performance, Code Quality & Semantics,
                Accessibility, UI and Usability issues. A report will document
                all recommendations and provide an immediately actionable plan.
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
