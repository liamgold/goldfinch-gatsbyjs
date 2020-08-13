import { Elements, ContentItemSystemAttributes, ElementType } from '@kentico/kontent-delivery';

export interface ModularContentElements {
  image: Elements.AssetsElement | undefined;
}

export interface ModularContent {
  elements: ModularContentElements;
  system: ContentItemSystemAttributes;
}

export interface Link {
  link_id: string;
  codename: string;
  type: string;
  url_slug: string;
}

export interface BodyCopy {
  value: string;
  type: ElementType;
  modular_content: ModularContent[];
  links: Link[];
}
