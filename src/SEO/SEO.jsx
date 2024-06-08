import { NextSeo } from 'next-seo';

const SEO = ({ title, description, canonical, ogUrl, ogTitle, ogDescription, ogImage, twitterHandle, twitterSite, twitterCardType, keywords }) => (
    <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: ogUrl,
          title: ogTitle,
          description: ogDescription,
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: 'Baden-Baden',
              type: 'image/png',
            },
          ],
          siteName: 'Baden-Baden',
          link: [
            {
              rel: 'icon',
              href: '/icon.png',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: ogImage,
          },
          {
            rel: 'Baden-Baden',
            href: ogImage,
            sizes: '76x76'
          },
        ]}
        twitter={{
          handle: twitterHandle,
          site: twitterSite,
          cardType: twitterCardType,
        }}
        additionalMetaTags={[
          {
            name: 'googlebot',
            content: 'index,follow',
          },
          {
            name: 'robots',
            content: 'index,follow',
          },
          {
            name: 'keywords',
            content: keywords.join(','),
          }
        ]}
    />
);

export default SEO;
