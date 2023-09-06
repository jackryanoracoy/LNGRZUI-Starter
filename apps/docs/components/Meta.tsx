import Head from 'next/head';
import { MetaDataType } from 'types/MetaDataType';

export default function Meta({
  title, description, keywords, themecolor
}: MetaDataType) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      <meta name="msapplication-TileColor" content={themecolor} />
      <meta name="theme-color" content={themecolor} />
      <link rel="mask-icon" href="/app-icon/safari-pinned-tab.svg" color={themecolor} />

      <title>{title}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />

      <link rel="apple-touch-icon" sizes="180x180" href="/app-icon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/app-icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="194x194" href="/app-icon/favicon-194x194.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/app-icon/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/app-icon/favicon-16x16.png" />
      <link rel="shortcut icon" href="/app-icon/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
    </Head>
  )
}
