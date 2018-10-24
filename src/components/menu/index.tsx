import * as React from 'react';
import * as styles from './menu.module.css';
import { elastic as ElasticMenu } from 'react-burger-menu';
import { Link } from 'gatsby';

const menuItems = [
  {
    href: '/',
    icon: 'fa-star-o',
    name: 'Home'
  },
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
              <Link
                className={styles['menu-item']}
                to={href}
                key={`menu-${index}`}
                activeClassName={styles.activeMenu}
              >
                <i className={`fa fa-fw ${icon}`} />
                {name}
              </Link>
            );
          })}
        </ElasticMenu>
      </div>
    );
  }
}

export default Menu;
