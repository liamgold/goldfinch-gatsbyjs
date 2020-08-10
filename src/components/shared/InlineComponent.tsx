import React, { FunctionComponent } from 'react';

import { ModularContent } from '@models/BodyCopy';
import InlineImage from '@components/shared/InlineImage';

interface InlineComponentProps {
  contentItem: ModularContent;
}

const InlineComponent: FunctionComponent<InlineComponentProps> = ({ contentItem }) => {
  const type = contentItem?.system.type;

  switch (type) {
    case 'image': {
      return <InlineImage asset={contentItem.elements.image} />;
    }

    default:
      return null;
  }
};

export default InlineComponent;
