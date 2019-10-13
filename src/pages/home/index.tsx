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
          <Grid columns={2}>
            <div>
              <h2>Front-end development experts.</h2>
              <div className={styles.media}>
                <p>
                  We are a team of passionate UI Engineers ready to roll our
                  sleeves and help your organisation to meet your front-end
                  development goals.
                </p>

                <p>
                  With a highly technical team of JavaScript experts, we are at
                  the leading edge of the newest and rapidly evolving
                  frameworks. Having lived and breathed modern web development
                  for more than 10 years, we know how to tackle its trickiest
                  aspects like responsive design, browser compatibility,
                  performance and accessibility.
                </p>

                <p>
                  We help our clients to rapidly create digital products that
                  drive growth, empower and enable an organisation to
                  continuously learn, challenge and evolve.
                </p>
              </div>
              <button className={styles.cta} onClick={handleClick}>
                Let's talk
              </button>
            </div>
            <div>&nbsp;</div>
          </Grid>
        </Section>
        <Section style={{ backgroundColor: '#eee' }}>
          <h2>How can we help?</h2>
          <Grid columns={3}>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconDesign}`} />
              <h3>UI Architecture</h3>
              <p>
                There are plenty of&nbsp;considerations you need to&nbsp;make
                when building an&nbsp;architecture for a&nbsp;web application.
                We&nbsp;will help you navigate in&nbsp;the fast paced world
                of&nbsp;front-end technology and design a&nbsp;fit for purpose
                client-side stack and development workflow.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconCode}`} />
              <h3>Front-end development</h3>
              <p>
                Not only we&nbsp;know how to&nbsp;build stunning
                standalone&nbsp;UI experiences, but we&nbsp;also have
                a&nbsp;good insight how to&nbsp;integrate front-end workflow
                into platforms like Adobe Experience Manager, Hybris,
                SalesForce, Power&nbsp;BI and&nbsp;Tableau.
              </p>
            </div>
            <div className={styles.column}>
              <span className={`${styles.icon} ${styles.iconQuality}`} />
              <h3>Code Reviews and Audit</h3>
              <p>
                We&nbsp;will perform a&nbsp;thorough analysis of&nbsp;your web
                application that is assessing Performance, Code Quality &amp;
                Semantics, Accessibility, UI and Usability issues. A report will
                document all recommendations and provide an&nbsp;immediately
                actionable&nbsp;plan.
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
