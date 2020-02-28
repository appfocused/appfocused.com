import * as React from 'react';
import * as styles from './grid.module.css';

interface IGrid {
  gridTemplateColumns?: any;
  hasLeftSidebar?: boolean;
  hasRightSidebar?: boolean;
  children: any;
}

const defaultStyle = {
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
};

const Grid = ({
  hasLeftSidebar,
  hasRightSidebar,
  gridTemplateColumns = defaultStyle,
  children
}: IGrid) => {
  const hasSidebar = Boolean(hasLeftSidebar || hasRightSidebar);
  const getSidebarClass = () => {
    if (!hasSidebar) {
      return;
    }

    return hasLeftSidebar ? styles.leftSidebar : styles.rightSidebar;
  };
  const sectionStyle = hasSidebar ? {} : gridTemplateColumns;
  return (
    <section
      className={`${styles.wrapper} ${getSidebarClass()}`}
      style={sectionStyle}
    >
      {children}
    </section>
  );
};

export default Grid;
