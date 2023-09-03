import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function Grid() {
  const { t } = useTranslation(['common', 'grid']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentGrid = dynamic(() => import('../contents/Grid'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('grid:meta.title')}
        keywords={t('grid:meta.keyword')}
        description={t('grid:meta.description')}
        themecolor={t('grid:meta.themecolor')}
      />

      <ContentGrid />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'grid']))},
  }
}
