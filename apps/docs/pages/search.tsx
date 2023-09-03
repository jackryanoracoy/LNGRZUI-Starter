import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import pagesData from '../public/pages-data.json';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function Search() {
  const { t } = useTranslation(['common', 'search']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentSearch = dynamic(() => import('../contents/Search'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('search:meta.title')}
        keywords={t('search:meta.keyword')}
        description={t('search:meta.description')}
        themecolor={t('search:meta.themecolor')}
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
