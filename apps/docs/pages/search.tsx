import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';
import pagesData from '../public/pages-data.json';

const Meta = dynamic(() => import('../component/Meta'), { loading: () => <Loading /> });
const ContentSearch = dynamic(() => import('../component/ContentSearch'), { loading: () => <Loading /> });

export default function Search() {
  const { t } = useTranslation('search');
  return (
    <>
      <Meta
        title={t('meta.title')}
        keywords={t('meta.keyword')}
        description={t('meta.description')}
        themecolor={t('meta.themecolor')}
      />

      <ContentSearch pagesData={pagesData} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'search']))},
  }
}
