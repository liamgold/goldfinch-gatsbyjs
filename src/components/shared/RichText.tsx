import React, { FunctionComponent, Fragment } from 'react';
import parseHTML, { DomElement } from 'html-react-parser';
import get from 'lodash/get';

import { styled } from '@utils/theme';
import InlineComponent from '@components/shared/InlineComponent';
import { BodyCopy, ModularContent } from '@models/BodyCopy';

interface RichTextProps {
  className?: string;
  body: BodyCopy | undefined;
}

const Container: FunctionComponent<RichTextProps> = ({ className, body }) => {
  if (!body) {
    return null;
  }

  // Remove any line breaks from HTML.
  const cleaned = body.value.replace(/(\n|\r)+/, '');

  // Parse HTML as React components, replacing any content items.
  const children = parseHTML(cleaned, {
    replace: domNode => replaceNode(domNode, body.modular_content),
  });

  // Return all components inside a fragment.
  return <div className={className}>{children}</div>;
};

/** Get code name for Kentico Kontent inline content item from DOM node. */
function getCodeName(domNode: DomElement): string | null {
  return get(domNode, 'attribs["data-codename"]') || null;
}

/** Check if DOM node is a Kentico Kontent inline content item. */
function isInlineContentItem(domNode: DomElement): boolean {
  return domNode.name === 'object' && !!domNode.attribs && domNode.attribs.type === 'application/kenticocloud';
}

/** Replace HTML DOM node with React component. */
function replaceNode(domNode: DomElement, contentItems: ModularContent[]): React.ReactElement | undefined | false {
  // Replace inline content items.
  if (isInlineContentItem(domNode)) {
    const codename = getCodeName(domNode);

    if (!codename) {
      return false;
    }

    const contentItem = contentItems.find(item => item?.system?.codename === codename);

    if (!contentItem) {
      return <Fragment />;
    }

    return <InlineComponent contentItem={contentItem} />;
  }
}

const RichText = styled(Container)``;

export default RichText;
