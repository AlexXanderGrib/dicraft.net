import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth" prefix="og: https://ogp.me/ns#">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/app/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/app/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/images/app/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="DiCraft" />
        <meta name="application-name" content="DiCraft" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="msapplication-TileImage" content="/images/app/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800&amp;family=Nunito:ital,wght@0,400;0,700;0,800;1,400;1,700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-default">
        <Main />
        <script dangerouslySetInnerHTML={{ __html: `<!--googleoff: all-->` }} />
        <NextScript />
        <script dangerouslySetInnerHTML={{ __html: `<!--googleon: all-->` }} />
      </body>
    </Html>
  );
}
