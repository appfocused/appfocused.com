import * as React from 'react';
import * as styles from './footer.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { ReactComponent as AddressIcon } from '../../assets/footer/address.svg';
import { ReactComponent as EmailIcon } from '../../assets/footer/email.svg';
import { ReactComponent as PhoneIcon } from '../../assets/footer/phone.svg';

import Grid from '../grid';
import Section from '../section';
import { Link } from 'gatsby';

interface IProps {
  hasScroll: boolean;
}

const currentYear = new Date().getFullYear();

const Footer = React.memo((props: IProps) => {
  const { hasScroll } = props;
  console.log({ props });
  return (
    <footer className={styles.footer}>
      <Section>
        <Grid>
          <div>
            <p className={styles.logoWrapper}>
              <span className={styles.logo}>app.focused()</span>
            </p>
            <p className={styles.smallPrint}>
              2016&mdash;{currentYear} &copy; Appfocused Limited. All rights
              reserved.
            </p>
            <p className={styles.smallPrint}>
              Appfocused Limited is a company registered in England and Wales.
            </p>
            <p className={styles.smallPrint}>
              Company No. 10477647 | VAT No. 264967246
            </p>
          </div>
          <div>
            <h3>Contact us</h3>
            <p className={styles.phone}>
              <PhoneIcon className={styles.icon} />
              <a href="tel:+442074594381">+44 (0) 207 459 4381</a>
            </p>
            <p className={styles.email}>
              <EmailIcon className={styles.icon} />
              info@appfocused.com
            </p>
            <p className={styles.address}>
              <AddressIcon className={styles.icon} />
              Unit C, Toronto House,
              <br />
              Surrey Quays Road,
              <br />
              London,
              <br />
              SE16 7AJ
            </p>
          </div>
          <div>
            <h3>Featured</h3>
            <p>
              <AniLink to="/front-end-development" cover direction="left">
                Front-end development
              </AniLink>
            </p>
            <p>
              <AniLink to="/blog" cover direction="left">
                Blog
              </AniLink>
            </p>

            <h3>Latest from the blog</h3>
            <p>
              <span className={styles.pill}>tutorial</span>{' '}
              <AniLink
                className={styles.blogHeading}
                cover
                direction="left"
                to="/blog/autocomplete-typescript-react-rxjs/"
              >
                Ultimate Autocomplete with TypeScript, React Hooks and RxJS
              </AniLink>
            </p>
          </div>
        </Grid>
      </Section>
    </footer>
  );
});

export default Footer;
