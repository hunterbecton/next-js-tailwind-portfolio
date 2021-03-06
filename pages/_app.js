import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        titleTemplate='Hunter Becton | %s'
        title='Frontend developer in Atlanta, GA'
        description={`I'm a frontend developer and indie maker in Atlanta, GA. I love to build web apps with TypeScript, Next.js, React, Express, Tailwind and MongoDB.`}
        openGraph={{
          title: 'frontend developer in Atlanta, GA',
          description: `I'm a frontend developer and indie maker in Atlanta, GA. I love to build web apps with TypeScript, Next.js, React, Express, Tailwind and MongoDB.`,
          type: 'website',
          locale: 'en_US',
          site_name: 'Hunter Becton',
          images: [
            {
              url: `https://hunterbecton.com/social.jpg`,
              width: 1200,
              height: 600,
              alt: 'Hunter Becton Frontend Developer in Atlanta, GA',
            },
          ],
        }}
        twitter={{
          site: '@hunterbecton',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
