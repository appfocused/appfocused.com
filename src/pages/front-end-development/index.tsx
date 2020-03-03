import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../../components/hero';
import Layout from '../../components/layout/layout';
import Section from '../../components/section';
import Grid from '../../components/grid';

import * as styles from './index.module.css';
import HeroSubpage from '../../components/hero-subpage/hero-subpage';
import {
  default as Testimonials,
  ITestimonial
} from '../../components/testimonials';

import { ReactComponent as TrophyIcon } from '../../assets/featured-icons/trophy.svg';
import { ReactComponent as IdeasIcon } from '../../assets/featured-icons/ideas.svg';
import { ReactComponent as DataIcon } from '../../assets/featured-icons/data.svg';
import { ReactComponent as ReactIcon } from '../../assets/featured-icons/react.svg';
import { ReactComponent as UiIcon } from '../../assets/featured-icons/ui.svg';
import { ReactComponent as RocketIcon } from '../../assets/featured-icons/rocket.svg';
import { ContactForm } from '../../components/contact-form';
import { ToastContainer } from 'react-toastify';

interface IProps {
  location: {
    pathname: string;
  };
}

export default (props: IProps) => {
  // const data = props.data.markdownRemark;

  const handleClick = (e: any) => {
    e.preventDefault();
    document.querySelector('[name=contacts]').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const testimonials: ITestimonial[] = [
    {
      company: 'Goldman Sachs',
      name: 'John Lynch',
      quote: `Appfocused engineers did a terrific job. Their insights,
      capabilities and dedication were critical in delivering
      digital experiences to our clients and elevating the technical
      maturity of our team.`,
      title: 'Managing Director'
    }
  ];

  return (
    <div className={styles.content}>
      <Layout>
        <Helmet>
          <title>Front-end Development Services | Appfocused</title>
          <meta
            name="description"
            content="We deliver great quality user interfaces, fast. Trusted by world's largest organisations. Fast-forward your app's time to market with our all-star front-end team."
          />
        </Helmet>
        <ToastContainer />
        <HeroSubpage
          title="Modern front-end development services"
          text="We help our clients navigate an increasingly complex technology landscape of the web platform and fast-forward time to market with our all-star front-end development team."
          buttonText="Get in touch"
          onButtonClick={handleClick}
        ></HeroSubpage>
        <Section>
          <div className={styles.featured}>
            <div className={styles.featuredHeader}>We can help</div>
            <ul className={styles.featuredList}>
              <li>
                <TrophyIcon className={styles.featuredIcon} /> Deliver great
                quality user interfaces
              </li>
              <li>
                <ReactIcon className={styles.featuredIcon} /> Be bold with
                front-end technology
              </li>
              <li>
                <IdeasIcon className={styles.featuredIcon} /> Rapidly validate
                new ideas
              </li>
              <li>
                <UiIcon className={styles.featuredIcon} /> Accomplish consistent
                UX
              </li>
              <li>
                <DataIcon className={styles.featuredIcon} /> Interactively
                visualise business data
              </li>
              <li>
                <RocketIcon className={styles.featuredIcon} /> Enhance
                applications performance
              </li>
            </ul>
          </div>
        </Section>
        <Section className={styles.rwd}>
          <Grid hasRightSidebar>
            <div className={styles.main}>
              <h2>Bespoke web app development</h2>
              <p>
                We’re creatively led, and strategically minded — existing to
                create transformative digital experiences for our clients.
                Whether you need to build a proof of concept or an
                enterprise-grade application, integrate a backend system or
                tweak performance to achieve higher conversion rates, our team
                will work with you to bring a high-quality digital product to
                life, helping you meet the realities of today and tomorrow.
              </p>

              <p>
                With our technology expertise, passion for craftsmanship and
                deep commitment to make the web better for every user, we are
                best positioned for creating engaging and user-friendly
                interfaces, that in turn drive growth and empower organisations.
              </p>

              <p>
                Our professional integrity and reputation is what makes us
                different from all the other front-end developers out there.
              </p>
            </div>
            <div className={styles.side}></div>
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
