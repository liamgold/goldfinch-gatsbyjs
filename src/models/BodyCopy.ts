import { Elements, ContentItemSystemAttributes } from '@kentico/kontent-delivery';

export interface ModularContentElements {
  image: Elements.AssetsElement | undefined;
}

export interface ModularContent {
  elements: ModularContentElements;
  system: ContentItemSystemAttributes;
}

export interface BodyCopy extends Elements.RichTextElement {
  modular_content: ModularContent[];
}
