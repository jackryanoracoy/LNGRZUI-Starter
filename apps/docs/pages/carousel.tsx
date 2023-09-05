import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageCarousel() {
  const { t } = useTranslation(['common', 'carousel']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentCarousel = dynamic(() => import('../contents/Carousel'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('carousel:meta.title')}
        keywords={t('carousel:meta.keyword')}
        description={t('carousel:meta.description')}
        themecolor={t('carousel:meta.themecolor')}
      />

      <ContentCarousel />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'carousel']))},
  }
}
