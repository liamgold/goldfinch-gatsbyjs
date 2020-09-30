import React, { Fragment, FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import { styled } from '@utils/theme';

interface PaginationProps {
  className?: string;
  baseUrl: string;
  currentPage: number;
  numPages: number;
}

const Container: FunctionComponent<PaginationProps> = ({ className, baseUrl, currentPage, numPages }) => {
  const { site } = useStaticQuery(query);

  const { siteUrl } = site.siteMetadata;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `${siteUrl}${baseUrl}` : `${siteUrl}${baseUrl}${currentPage - 1}/`;
  const nextPage = `${siteUrl}${baseUrl}${currentPage + 1}/`;

  return (
    <Fragment>
      <Helmet>
        {!isFirst && <link rel="prev" href={prevPage} />}
        {!isLast && <link rel="next" href={nextPage} />}
      </Helmet>
      <div className={className}>
        <ul>
          {!isFirst && (
            <li>
              <Link to={prevPage} rel="prev">
                Previous
              </Link>
            </li>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li key={`pagination-number${i + 1}`}>
              <Link to={`${baseUrl}${i === 0 ? '' : `${i + 1}/`}`}>{i + 1}</Link>
            </li>
          ))}
          {!isLast && (
            <li>
              <Link to={nextPage} rel="next">
                Next
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  );
};

const Pagination = styled(Container)`
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 0 0 15px;
    }
  }
`;

export default Pagination;

export const query = graphql`
  query Pagination {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
