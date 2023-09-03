import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function Layout() {
  const { t } = useTranslation(['common', 'layout']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentLayout = dynamic(() => import('../contents/Layout'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('layout:meta.title')}
        keywords={t('layout:meta.keyword')}
        description={t('layout:meta.description')}
        themecolor={t('layout:meta.themecolor')}
      />

      <ContentLayout />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'layout']))},
  }
}
