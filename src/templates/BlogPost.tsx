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

  let teaserImage = '';

  if (item?.elements?.base__teaser_image?.value[0]) {
    teaserImage = item?.elements?.base__teaser_image?.value[0].url;
  }

  return (
    <Layout
      title={item?.elements?.seo__meta_title?.value}
      description={item?.elements?.seo__meta_description?.value}
      article={true}
      image={teaserImage}
      canonical={item?.elements?.seo__canonical_url?.value}
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
        base__teaser_image {
          value {
            url
          }
        }
        seo__meta_title {
          value
        }
        seo__meta_description {
          value
        }
        seo__canonical_url {
          value
        }
        body_copy {
          value
          modular_content {
            ... on kontent_item_code_block {
              elements {
                language {
                  value {
                    codename
                  }
                }
                code {
                  value
                }
              }
              system {
                id
                codename
                type
              }
            }
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
          links {
            codename
            link_id
            type
            url_slug
          }
        }
      }
      system {
        id
      }
    }
  }
`;
