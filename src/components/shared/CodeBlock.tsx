import React, { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Elements } from '@kentico/kontent-delivery';

interface CodeBlockProps {
  code: Elements.TextElement | undefined;
  language: Elements.MultipleChoiceElement | undefined;
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ code, language }) => {
  if (!code || !language) {
    return null;
  }

  return (
    <SyntaxHighlighter language={language.value[0].codename} style={vs2015}>
      {code.value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
