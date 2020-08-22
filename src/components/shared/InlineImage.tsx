import React, { FunctionComponent } from 'react';
import { Elements } from '@kentico/kontent-delivery';

import { styled } from '@utils/theme';

interface InlineImageProps {
  className?: string;
  asset: Elements.AssetsElement | undefined;
}

const Container: FunctionComponent<InlineImageProps> = ({ className, asset }) => {
  if (!asset) {
    return null;
  }

  const image = asset.value[0];

  if (!image) {
    return null;
  }

  return (
    <figure className={className}>
      <img src={image.url} alt={image.description}></img>
      {image.description && <figcaption>{image.description}</figcaption>}
    </figure>
  );
};

const InlineImage = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  figcaption {
    font-style: italic;
    font-size: 16px;
  }
`;

export default InlineImage;
