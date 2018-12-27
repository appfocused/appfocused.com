import * as React from 'react';
import * as styles from './menu.module.css';
import { elastic as ElasticMenu } from 'react-burger-menu';
<<<<<<< HEAD
<<<<<<< HEAD
import AniLink from 'gatsby-plugin-transition-link/AniLink';
=======
import { Link } from 'gatsby';
>>>>>>> blog and menu improvements
=======
import AniLink from 'gatsby-plugin-transition-link/AniLink';
>>>>>>> visual update - footer, page transitions, npm update

const menuItems = [
  {
    href: '/',
    icon: 'fa-star-o',
    name: 'Home'
  },
  // {
  //   href: '/services',
  //   icon: 'fa-rocket',
  //   name: 'Services'
  // },
  {
    href: '/blog',
    icon: 'fa-pencil',
    name: 'Blog'
  }
];

class Menu extends React.Component<{}, { isOpen: boolean }> {
  state = {
    isOpen: false
  };

  render() {
    return (
      <div className={styles.hamburger}>
        <ElasticMenu
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          right
          isOpen={this.state.isOpen}
        >
          {menuItems.map(({ name, href, icon }, index) => {
            return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> visual update - footer, page transitions, npm update
              <div className={styles['menu-item']} key={`menu-${index}`}>
                <AniLink cover direction="left" to={href} duration={1.5}>
                  <i className={`fa fa-fw ${icon}`} />
                  {name}
                </AniLink>
              </div>
<<<<<<< HEAD
=======
              <Link
                className={styles['menu-item']}
                to={href}
                key={`menu-${index}`}
                activeClassName={styles.activeMenu}
              >
                <i className={`fa fa-fw ${icon}`} />
                {name}
              </Link>
>>>>>>> blog and menu improvements
=======
>>>>>>> visual update - footer, page transitions, npm update
            );
          })}
        </ElasticMenu>
      </div>
    );
  }
}

export default Menu;
