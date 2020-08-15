import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { styled } from '@utils/theme';
import { device } from '@utils/devices';
import { BlogDetail } from '@models/BlogDetail';

interface BlogCardProps {
  className?: string;
  blog: BlogDetail;
}

const DateBlock = styled.span`
  font-size: 14px;
`;

const Container: FunctionComponent<BlogCardProps> = ({ className, blog }) => {
  const date = new Date(blog?.elements?.post_date?.value || '');
  const formattedDate = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(date);

  return (
    <div className={className}>
      <Link to={`/blog/${blog?.elements?.url_slug?.value}/`}>{blog?.elements?.base__title?.value}</Link>
      <DateBlock>{`${formattedDate}`}</DateBlock>
      <p>{blog?.elements?.summary?.value}</p>
    </div>
  );
};

const BlogCard = styled(Container)`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colour.grey};
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 25px;

  @media ${device.tablet} {
    flex: 0 1 49%;
  }
`;

export default BlogCard;
