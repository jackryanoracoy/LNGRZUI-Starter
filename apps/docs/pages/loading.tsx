import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageLoading() {
  const { t } = useTranslation(['common', 'loading']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentLoading = dynamic(() => import('../contents/Loading'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('loading:meta.title')}
        keywords={t('loading:meta.keyword')}
        description={t('loading:meta.description')}
        themecolor={t('loading:meta.themecolor')}
      />

      <ContentLoading />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'loading']))},
  }
}
