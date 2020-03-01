import * as React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Hero from '../../components/hero';
import Layout from '../../components/layout/layout';
import Section from '../../components/section';
import Grid from '../../components/grid';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as styles from './index.module.css';
import { ContactForm } from '../../components/contact-form';

import { ReactComponent as WebIcon } from '../../assets/icons/web.svg';
import { ReactComponent as DesktopIcon } from '../../assets/icons/desktop.svg';
import { ReactComponent as MobileIcon } from '../../assets/icons/mobile.svg';
import { ReactComponent as AuditIcon } from '../../assets/icons/audit.svg';
import { ReactComponent as RescueIcon } from '../../assets/icons/rescue.svg';
import { ReactComponent as RecruitmentIcon } from '../../assets/icons/recruitment.svg';

import { ReactComponent as ReactLogo } from '../../assets/tech-logos/react-01.svg';
import { ReactComponent as ReduxLogo } from '../../assets/tech-logos/redux-01.svg';
import { ReactComponent as HtmlLogo } from '../../assets/tech-logos/html5-01.svg';
import { ReactComponent as CssLogo } from '../../assets/tech-logos/css3-01.svg';
import { ReactComponent as JsLogo } from '../../assets/tech-logos/js-01.svg';
import { ReactComponent as TsLogo } from '../../assets/tech-logos/ts-01.svg';
import { ReactComponent as VueLogo } from '../../assets/tech-logos/vue-01.svg';
import { ReactComponent as MeteorLogo } from '../../assets/tech-logos/meteor-01.svg';
import { ReactComponent as NodeLogo } from '../../assets/tech-logos/nodejs-01.svg';
import { ReactComponent as WebpackLogo } from '../../assets/tech-logos/webpack-01.svg';
// import {ReactComponent as TechLogo} sassLogo from '../../assets/tech-logos/sass-01.svg';
import { ReactComponent as PostcssLogo } from '../../assets/tech-logos/postcss.svg';
import Tech from '../../components/tech';
import WhyUs from '../../components/why-us';

const technologies = [
  ReactLogo,
  ReduxLogo,
  HtmlLogo,
  CssLogo,
  JsLogo,
  TsLogo,
  VueLogo,
  NodeLogo,
  MeteorLogo,
  WebpackLogo,
  PostcssLogo
];

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
          <meta
            name="description"
            content="We believe in digital experiences that make a difference. We build engaging and
            user-friendly interfaces for digital products, that in turn drive growth and
            empower organisations."
          />
        </Helmet>
        <ToastContainer />
        <Hero />
        <Section>
          <Grid>
            <svg
              style={{ width: 0, height: 0, position: 'absolute' }}
              aria-hidden="true"
              focusable="false"
            >
              <linearGradient id="icon-gradient" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--primary-color-dark)" />
                <stop offset="100%" stopColor="var(--primary-color-light)" />
                <stop offset="50%" stopColor="var(--primary-color-main)" />
              </linearGradient>
              <linearGradient id="icon-gradient-hover" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--primary-color-light)" />
                <stop offset="100%" stopColor="var(--primary-color-dark)" />
                <stop offset="50%" stopColor="var(--primary-color-main)" />
              </linearGradient>
            </svg>
            <div
              style={{
                maxWidth: '740px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <h2 className="centered color-bar">User interface experts</h2>
              <p className="">
                We believe in digital experiences that make a difference.
              </p>
              <p className="">
                With our technology expertise, passion for craftsmanship and
                deep commitment to&nbsp;make the web better for every user, we
                are best positioned for creating engaging and
                user-friendly&nbsp;interfaces, that in turn drive growth and
                empower&nbsp;organisations.
              </p>
              <p className="">
                We help our clients navigate an increasingly complex technology
                landscape and fast-forward time to market with our all-star
                front-end development team.
              </p>
              <p className="centered">
                <button className={styles.cta} onClick={handleClick}>
                  Get to know us better
                </button>
              </p>
            </div>
          </Grid>
        </Section>
        <Section className={styles.greySection}>
          <h2 className="centered color-bar">How can we help?</h2>
          <Grid>
            <div>
              <Link
                to="/front-end-development"
                className={`${styles.column} ${styles.servicesLink}`}
              >
                <span className={styles.iconSvg}>
                  <WebIcon />
                </span>
                <h3>Web</h3>
              </Link>
              <p>
                Web applications development is our core area of expertise and
                passion. Not only we know how to build slick and functional
                front-ends, but we also have a good insight on how to integrate
                it into your existing services and&nbsp;platforms.
              </p>
            </div>
            <div>
              <Link
                to="/front-end-development"
                className={`${styles.column} ${styles.servicesLink}`}
              >
                <span className={styles.iconSvg}>
                  <DesktopIcon />
                </span>
                <h3>Desktop</h3>
              </Link>
              <p>
                Modern frameworks such as Electron and Openfin allow us to reuse
                our web expertise to rapidly produce complex and secure desktop
                applications for Windows, Mac and Linux, allowing to reduce time
                to market for multi-platform apps.
              </p>
            </div>
            <div>
              <Link
                to="/front-end-development"
                className={`${styles.column} ${styles.servicesLink}`}
              >
                <div className={styles.iconSvg}>
                  <MobileIcon />
                </div>

                <h3>Mobile</h3>
              </Link>

              <p>
                React Native is a JavaScript framework that allows us to rapidly
                develop iOS and Android applications with native behavior and a
                common codebase. Using native controls for building user
                interfaces in both platforms helps to avoid performance
                problems.
              </p>
            </div>
            <div>
              <Link
                to="/front-end-development"
                className={`${styles.column} ${styles.servicesLink}`}
              >
                <span className={styles.iconSvg}>
                  <AuditIcon />
                </span>
                <h3>Code reviews and audit</h3>
              </Link>
              <p>
                Understanding risks and technical debts now can pay off
                considerably in the future. We thoroughly analyse your web
                application to surface risks and to provide you with immediately
                actionable&nbsp;plan.
              </p>
            </div>
            <div>
              <Link
                to="/front-end-development"
                className={`${styles.column} ${styles.servicesLink}`}
              >
                <span className={styles.iconSvg}>
                  <RescueIcon />
                </span>
                <h3>Rescue mission</h3>
              </Link>
              <p>
                Our in-depth understanding of web technologies and a set of
                proven debug techniques allow us to find and eliminate defects
                and performance issues in your existing app within
                short&nbsp;timeframes.
              </p>
            </div>
            <div>
              <Link
                to="/front-end-development"
                className={`${styles.column} ${styles.servicesLink}`}
              >
                <span className={styles.iconSvg}>
                  <RecruitmentIcon />
                </span>
                <h3>Hiring help</h3>
              </Link>
              <p>
                The right mix of tech interviews, live coding and problem
                solving exercises allows us to cherry pick the best
                technically-apt web developers, assess their seniority and
                validate their track&nbsp;record.
              </p>
            </div>
          </Grid>
        </Section>
        <Tech />
        <WhyUs />
        <Section>
          <Grid>
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
