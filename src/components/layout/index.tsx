import * as React from 'react';
import { Link } from 'gatsby';
import './layout.module.css';

import { rhythm, scale } from '../../utils/typography';

class Layout extends React.Component<any, any> {
  render() {
    const { location, children } = this.props;
    const rootPath = `$(window as any).{__PATH_PREFIX__}/`;
    const isHome = location.pathname === rootPath;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1)
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={'/'}
          >
            Gatsby Starter Blog
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        {header}
        {children}
      </div>
    );
  }
}

export default Layout;
