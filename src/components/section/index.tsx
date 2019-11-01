import * as React from 'react';
import * as cx from 'classnames';
import * as styles from './section.module.css';

interface IProps {
  children: any;
  isFullWidth?: boolean;
  isBlog?: boolean;
  backgroundStyle?: any;
  style?: any;
}

const Section = (props: IProps) => {
  const { isFullWidth, isBlog, ...restProps } = props;
  return (
    <section className={styles.section} {...restProps}>
      <div
        className={cx(
          styles.container,
          isFullWidth && styles.fullWidth,
          isBlog && styles.blog
        )}
      >
        {props.children}
      </div>
    </section>
  );
};

export default Section;
