import * as React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { get } from 'lodash';
import Img from 'gatsby-image';
import ReactDisqusComments from 'react-disqus-comments';

import Layout from '../components/layout/layout';
import Section from '../components/section';
import Grid from '../components/grid';

import * as styles from './blog-post.module.css';

class BlogPostTemplate extends React.Component<any, any> {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const siteDescription = post.excerpt;
    const { previous, next } = this.props.pageContext;
    console.log(this.props, ReactDisqusComments);

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <div>
          {post.frontmatter.featuredImage ? (
            <Img
              className={styles.bgImage}
              sizes={post.frontmatter.featuredImage.childImageSharp.sizes}
            />
          ) : (
            <Img
              className={styles.bgImage}
              sizes={this.props.data.defaultFeaturedImage.childImageSharp.sizes}
            />
          )}
        </div>
        <Section isBlog>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <ReactDisqusComments
            shortname="appfocused"
            identifier={`appfocused${this.props.location.pathname}`}
            title={post.frontmatter.title}
            url={`https://appfocused.com${this.props.location.pathname}`}
            onNewComment={() => {}}
          />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </Section>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    defaultFeaturedImage: file(relativePath: { eq: "polygons.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
