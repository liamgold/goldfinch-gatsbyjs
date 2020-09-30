import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';

import { styled } from '@utils/theme';
import Layout from '@components/Layout';
import { BlogListing } from '@models/BlogListing';
import { BlogDetail } from '@models/BlogDetail';
import BlogCard from '@components/blog/BlogCard';
import Pagination from '@components/shared/Pagination';

interface BlogListProps {
  data: BlogListResult;
  pageContext: BlogListPageContext;
}

interface BlogListPageContext {
  currentPage: number;
  limit: number;
  numPages: number;
  skip: number;
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

const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BlogPostListing: FunctionComponent<BlogListProps> = ({ data, pageContext }) => {
  const item = data.kontentItemBlogListing;
  const blogDetails = data.allKontentItemBlogDetail;

  if (!item) {
    return null;
  }

  const { currentPage, numPages } = pageContext;

  return (
    <Layout title={item?.elements?.seo__meta_title?.value} description={item?.elements?.seo__meta_description?.value}>
      <div>
        <h1>{item?.elements?.base__title?.value}</h1>

        <BlogList>
          {blogDetails.edges.map(edge => {
            const blog = edge?.node;
            return <BlogCard key={blog.system.id} blog={blog} />;
          })}
        </BlogList>
        <Pagination baseUrl="/blog/" currentPage={currentPage} numPages={numPages} />
      </div>
    </Layout>
  );
};

export default BlogPostListing;

export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
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
    allKontentItemBlogDetail(sort: { fields: elements___post_date___value, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          elements {
            base__title {
              value
            }
            base__teaser_image {
              value {
                url
              }
            }
            post_date {
              value
            }
            summary {
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
