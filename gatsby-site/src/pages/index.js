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
