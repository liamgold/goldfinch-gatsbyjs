import { ContentItem, Elements } from '@kentico/kontent-delivery';

import { BodyCopy } from '@models/BodyCopy';

interface Elements {
  base__title: Elements.TextElement | undefined;
  base__teaser_image: Elements.AssetsElement | undefined;
  seo__meta_title: Elements.TextElement | undefined;
  seo__meta_description: Elements.TextElement | undefined;
  summary: Elements.TextElement | undefined;
  url_slug: Elements.UrlSlugElement | undefined;
  post_date: Elements.DateTimeElement | undefined;
  body_copy: BodyCopy | undefined;
}

export class BlogDetail extends ContentItem {
  public elements: Elements | undefined;
}
