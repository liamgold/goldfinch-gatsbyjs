import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Index = ({ data }) => {
  const node = data.allKenticoCloudItemHome.edges[0].node;
  const {
    seo__meta_title,
    seo__meta_description,
    seo__meta_keywords,
    base__title,
    body_copy,
  } = node.elements;

  const title = !seo__meta_title.text ? `Liam Goldfinch | .NET Developer` : seo__meta_title.text;
  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: `${seo__meta_description.text}` },
          { name: 'keywords', content: `${seo__meta_keywords.text}` },
          // { property: 'og:title', content: ogtitle },
          // { property: 'og:type', content: 'website' },
          // { property: 'og:url', content: siteurl },
          // { property: 'og:image', content: `${siteurl}${ogImage}` },
          // { property: 'og:description', content: description },
          // { property: 'og:image:width', content: '1200' },
          // { property: 'og:image:height', content: '630' },
          // { name: 'twitter:card', content: 'summary_large_image' },
          // { name: 'twitter:title', content: ogtitle },
          // { name: 'twitter:description', content: description },
          // { name: 'twitter:image', content: `${siteurl}${ogImage}` },
        ]}
      />
      <Layout>
        <div>
          <h1>{base__title.text}</h1>
          <div dangerouslySetInnerHTML={{ __html: body_copy.resolvedHtml }} />
        </div>
      </Layout>
    </Fragment>
  );
};

export default Index;

export const query = graphql`
  {
    allKenticoCloudItemHome {
      edges {
        node {
          elements {
            base__title {
              text
            }
            seo__meta_title {
              text
            }
            seo__meta_description {
              text
            }
            seo__meta_keywords {
              text
            }
            body_copy {
              resolvedHtml
            }
            url_pattern {
              value
            }
          }
        }
      }
    }
  }
`;

Index.propTypes = {
  data: PropTypes.object,
};

// Index.propTypes = {
//   data: PropTypes.shape({
//     base__title: PropTypes.string,
//     footer_left_column: PropTypes.object,
//     footer_center_column: PropTypes.object,
//     footer_right_column: PropTypes.object,
//     footer_bottom_text: PropTypes.object,
//     backgrounds: PropTypes.array,
//   }),
// };
