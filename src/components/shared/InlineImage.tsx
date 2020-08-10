import React, { FunctionComponent } from 'react';
import { Elements } from '@kentico/kontent-delivery';

interface InlineImageProps {
  asset: Elements.AssetsElement | undefined;
}

const InlineImage: FunctionComponent<InlineImageProps> = ({ asset }) => {
  if (!asset) {
    return null;
  }

  const image = asset.value[0];

  if (!image) {
    return null;
  }

  return <img src={image.url} alt={image.description}></img>;
};

export default InlineImage;
