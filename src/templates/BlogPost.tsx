import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import { Article } from '@models/Article';

interface BlogPostProps {
  data: BlogPostResult;
}

interface BlogPostResult {
  kontentItemArticle: Article;
}

const BlogPost: FunctionComponent<BlogPostProps> = ({ data }) => {
  const item = data.kontentItemArticle;

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
        <div dangerouslySetInnerHTML={{ __html: item?.elements?.body_copy?.value || '' }} />
      </div>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    kontentItemArticle(elements: { url_slug: { value: { eq: $slug } } }) {
      elements {
        url_slug {
          value
        }
        base__title {
          value
        }
        body_copy {
          value
        }
      }
      system {
        id
      }
    }
  }
`;