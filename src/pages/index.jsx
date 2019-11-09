import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';

const Index = ({ data }) => {
  const node = data.allKontentItemHome.edges[0].node;
  const {
    seo__meta_title,
    seo__meta_description,
    seo__meta_keywords,
    base__title,
    body_copy,
  } = node.elements;

  const title = !seo__meta_title.value
    ? `Liam Goldfinch | .NET Developer`
    : seo__meta_title.value;
  return (
    <Fragment>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: `${seo__meta_description.value}` },
          { name: 'keywords', content: `${seo__meta_keywords.value}` },
        ]}
      />
      <Layout>
        <div>
          <h1>{base__title.value}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: body_copy.resolvedData.html }}
          />
        </div>
      </Layout>
    </Fragment>
  );
};

export default Index;

export const query = graphql`
  {
    allKontentItemHome {
      edges {
        node {
          elements {
            base__title {
              value
            }
            seo__meta_title {
              value
            }
            seo__meta_description {
              value
            }
            seo__meta_keywords {
              value
            }
            body_copy {
              resolvedData {
                html
              }
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
