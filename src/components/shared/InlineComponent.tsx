import React, { FunctionComponent } from 'react';

import { ModularContent } from '@models/BodyCopy';
import CodeBlock from '@components/shared/CodeBlock';
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

    case 'code_block': {
      return <CodeBlock code={contentItem.elements.code} language={contentItem.elements.language} />;
    }

    default:
      return null;
  }
};

export default InlineComponent;
