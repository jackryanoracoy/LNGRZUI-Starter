import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';

const Meta = dynamic(() => import('../component/Meta'), { loading: () => <Loading /> });
const ContentCarousel = dynamic(() => import('../component/ContentCarousel'), { loading: () => <Loading /> });

export default function Carousel() {
  const { t } = useTranslation('carousel');
  return (
    <>
      <Meta
        title={t('meta.title')}
        keywords={t('meta.keyword')}
        description={t('meta.description')}
        themecolor={t('meta.themecolor')}
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
