import * as React from 'react';
import Helmet from 'react-helmet';
import Hero from '../components/hero';

interface IProps {
  location: {
    pathname: string;
  };
}

const handleClick = (e: any) => {
  e.preventDefault();
  document.querySelector('[name=contacts]').scrollIntoView({
    behavior: 'smooth',
  });
};

export default (props: IProps) => {
  // const data = props.data.markdownRemark;
  return (
    <div>
      <Helmet>
        <title>Appfocused: great user experiences. Implemented.</title>
        <meta name="description" content="Appfocused" />
      </Helmet>
      <Hero />
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
