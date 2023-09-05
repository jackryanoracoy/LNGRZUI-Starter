import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageContent() {
  const { t } = useTranslation(['common', 'content']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentContent = dynamic(() => import('../contents/Content'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('content:meta.title')}
        keywords={t('content:meta.keyword')}
        description={t('content:meta.description')}
        themecolor={t('content:meta.themecolor')}
      />

      <ContentContent />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'content']))},
  }
}
