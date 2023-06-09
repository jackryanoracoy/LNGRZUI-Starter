import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import PageLayout from '../component/PageLayout';

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
       navigator.serviceWorker.register('/service-worker.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function (err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, [])
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default appWithTranslation(App)
