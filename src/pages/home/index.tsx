import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/hero';
import Layout from '../../components/layout/layout';
import Section from '../../components/section';
import Grid from '../../components/grid';
import ExpertsContent from './experts.mdx';

import * as styles from './index.module.css';

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
              <h2>Front-end development experts</h2>
              <div className={styles.media}>
                <ExpertsContent />
              </div>
              <button className={styles.cta} onClick={handleClick}>
                Let's talk
              </button>
            </div>
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
              <form
                className={styles.form}
                action="https://formspree.io/info@appfocused.com"
                method="POST"
              >
                <div>
                  <label>
                    Name:
                    <input type="text" name="name" required />
                  </label>
                </div>
                <div>
                  <label>
                    Email:
                    <input type="email" name="_replyto" required />
                  </label>
                </div>
                <div>
                  <label>
                    About your project:
                    <textarea name="about" rows={4} />
                  </label>
                </div>
                <div>
                  <button type="submit" className={styles.cta}>
                    Send
                  </button>
                </div>
              </form>
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
