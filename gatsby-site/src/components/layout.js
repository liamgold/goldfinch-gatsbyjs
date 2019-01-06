import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/header";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: `author`,
              content: `Liam Goldfinch`
            },
            {
              name: `description`,
              content: `.NET Developer, based in Leeds, England.`
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
