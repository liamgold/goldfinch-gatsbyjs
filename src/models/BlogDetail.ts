import { ContentItem, Elements } from '@kentico/kontent-delivery';

interface Elements {
  base__title: Elements.TextElement | undefined;
  base__teaser_image: Elements.AssetsElement | undefined;
  seo__meta_title: Elements.TextElement | undefined;
  seo__meta_keywords: Elements.TextElement | undefined;
  seo__meta_description: Elements.TextElement | undefined;
  url_slug: Elements.UrlSlugElement | undefined;
  body_copy: Elements.RichTextElement | undefined;
}

export class BlogDetail extends ContentItem {
  public elements: Elements | undefined;
}
