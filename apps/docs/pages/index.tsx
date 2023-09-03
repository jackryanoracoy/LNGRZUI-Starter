import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import pagesData from '../public/pages-data.json';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function Index() {
  const { t } = useTranslation(['common', 'home']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentHome = dynamic(() => import('../contents/Home'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('home:meta.title')}
        keywords={t('home:meta.keyword')}
        description={t('home:meta.description')}
        themecolor={t('home:meta.themecolor')}
      />

      <ContentHome pagesData={pagesData} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'home']))},
  }
}

