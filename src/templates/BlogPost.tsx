import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import Layout from '@components/Layout';
import RichText from '@components/shared/RichText';
import { BlogDetail } from '@models/BlogDetail';

interface BlogPostProps {
  data: BlogPostResult;
}

interface BlogPostResult {
  kontentItemBlogDetail: BlogDetail;
}

const BlogPost: FunctionComponent<BlogPostProps> = ({ data }) => {
  const item = data.kontentItemBlogDetail;

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

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    kontentItemBlogDetail(elements: { url_slug: { value: { eq: $slug } } }) {
      elements {
        url_slug {
          value
        }
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
          modular_content {
            ... on kontent_item_image {
              elements {
                image {
                  name
                  type
                  value {
                    description
                    height
                    size
                    type
                    name
                    url
                    width
                  }
                }
              }
              system {
                id
                codename
                type
              }
            }
          }
        }
      }
      system {
        id
      }
    }
  }
`;
