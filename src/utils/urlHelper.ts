export default function getUrl(type: string, urlSlug: string): string {
  switch (type) {
    case 'blog_detail': {
      return `/blog/${urlSlug}/`;
    }

    case 'blog_listing': {
      return '/blog/';
    }

    default:
    case 'home': {
      return '/';
    }
  }
}
