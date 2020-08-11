import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import { Home } from '@models/Home';
import RichText from '@components/shared/RichText';

interface IndexProps {
  data: IndexResult;
}

interface IndexResult {
  kontentItemHome: Home;
}

const Index: FunctionComponent<IndexProps> = ({ data }) => {
  const item = data.kontentItemHome;

  if (!item) {
    return null;
  }

  return (
    <Layout
      title={item?.elements?.seo__meta_title?.value}
      description={item?.elements?.seo__meta_description?.value}
      keywords={item?.elements?.seo__meta_keywords?.value}
    >
      <div>
        <h1>{item?.elements?.base__title?.value}</h1>
        <RichText body={item?.elements?.body_copy} />
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query HomeQuery {
    kontentItemHome {
      elements {
        base__title {
          value
        }
        seo__meta_title {
          value
        }
        seo__meta_keywords {
          value
        }
        seo__meta_description {
          value
        }
        body_copy {
          value
        }
      }
    }
  }
`;
