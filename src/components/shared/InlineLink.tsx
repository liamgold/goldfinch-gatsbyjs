import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import getUrl from '@utils/urlHelper';

interface InlineLinkProps {
  content: string;
  linkId: string;
  type: string;
  urlSlug: string;
}

const InlineLink: FunctionComponent<InlineLinkProps> = ({ content, linkId, type, urlSlug }) => {
  const url = getUrl(type, urlSlug);

  return (
    <Link key={linkId} to={url}>
      {content}
    </Link>
  );
};

export default InlineLink;
