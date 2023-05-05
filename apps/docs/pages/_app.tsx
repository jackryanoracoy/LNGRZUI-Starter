import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import PageLayout from '../component/PageLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default appWithTranslation(MyApp)
