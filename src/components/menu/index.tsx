import * as React from 'react';
import * as styles from './menu.module.css';
import { elastic as ElasticMenu } from 'react-burger-menu';

const menuItems = [
  {
    href: '/#',
    icon: 'fa-star-o',
    name: 'Home'
  },
  {
    href: '/#about',
    icon: 'fa-star-o',
    name: 'About us'
  },
  {
    href: '/#services',
    icon: 'fa-star-o',
    name: 'Service'
  },
  {
    href: '/#contacts',
    icon: 'fa-star-o',
    name: 'Contact us'
  }
];

class Menu extends React.Component<{}, { isOpen: boolean }> {
  state = {
    isOpen: false
  };

  handleClick = (e: any) => {
    e.preventDefault();
    const [host, anchor] = e.target.href.split('#');
    document.querySelector(`[name=${anchor}]`).scrollIntoView({
      behavior: 'smooth'
    });
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
          <p>
            Menu is coming soon<br />Watch this space
          </p>
          {/* { menuItems.map(({name, href, icon}, index) => (
            <a className={styles['menu-item']} href={href} key={`menu-${index}`} onClick={this.handleClick}>
              <i className={`fa fa-fw ${icon}`}></i>{name}
            </a>
            ))
          } */}
        </ElasticMenu>
      </div>
    );
  }
}

export default Menu;
