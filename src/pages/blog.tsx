import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '@components/Layout';
import { BlogListing } from '@models/BlogListing';
import { BlogDetail } from '@models/BlogDetail';

interface BlogListProps {
  data: BlogListResult;
}

interface BlogListResult {
  kontentItemBlogListing: BlogListing;
  allKontentItemBlogDetail: BlogEdges;
}

interface BlogEdges {
  edges: BlogNode[];
}

interface BlogNode {
  node: BlogDetail;
}

const Index: FunctionComponent<BlogListProps> = ({ data }) => {
  const item = data.kontentItemBlogListing;
  const blogDetails = data.allKontentItemBlogDetail;

  if (!item) {
    return null;
  }

  return (
    <Layout title={item?.elements?.seo__meta_title?.value} description={item?.elements?.seo__meta_description?.value}>
      <div>
        <h1>{item?.elements?.base__title?.value}</h1>

        <div>
          {blogDetails.edges.map(edge => {
            const blog = edge?.node;

            return (
              <div key={blog.system.id}>
                <Link to={`/blog/${blog?.elements?.url_slug?.value}`}>{blog?.elements?.base__title?.value}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query BlogListQuery {
    kontentItemBlogListing {
      elements {
        base__title {
          value
        }
        seo__meta_description {
          value
        }
        seo__meta_title {
          value
        }
      }
    }
    allKontentItemBlogDetail(sort: { fields: elements___post_date___value, order: DESC }) {
      edges {
        node {
          elements {
            base__title {
              value
            }
            post_date {
              value
            }
            url_slug {
              value
            }
          }
          system {
            id
          }
        }
      }
    }
  }
`;
