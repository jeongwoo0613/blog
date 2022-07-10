import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Jeongwoo',
    description: 'Blog',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png',
    google: '7m7SIUWnSo8WN2CucWLauTo1lLDF8SPzl6h7KqhOC1M'
  }

  return (
    <Html lang="ko">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jeongwoo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="google-site-verification" content={meta.google} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
