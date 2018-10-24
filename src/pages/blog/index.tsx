import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { get } from 'lodash';
import Helmet from 'react-helmet';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../../components/layout/layout';
import Section from '../../components/section';

import * as styles from './blog.module.css';

interface Props {
  posts: any;
  data: any;
  location: any;
}

class Home extends React.Component<Props> {
  render() {
    console.log(this.props);
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    );
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    const featuredImage = this.props.data.defaultFeaturedImage.childImageSharp
      .sizes;

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div style={{ position: 'relative' }}>
          <Img className={styles.bgImage} sizes={featuredImage} />
          <div className={styles.heading}>
            <h1>Blog</h1>
          </div>
        </div>
        <Section isBlog>
          {posts.map(({ node }: any) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <div key={node.fields.slug}>
                <small>{node.frontmatter.date}</small>
                <h3>
                  <AniLink
                    style={{ boxShadow: 'none' }}
                    to={node.fields.slug}
                    direction="up"
                    cover
                  >
                    {title}
                  </AniLink>
                </h3>
                <p
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
                  className={styles.excerpt}
                />
              </div>
            );
          })}
        </Section>
      </Layout>
    );
  }
}

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    defaultFeaturedImage: file(relativePath: { eq: "polygons.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
