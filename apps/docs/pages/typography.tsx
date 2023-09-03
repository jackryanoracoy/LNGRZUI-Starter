import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function Typography() {
  const { t } = useTranslation(['common', 'typography']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentTypography = dynamic(() => import('../contents/Typography'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('typography:meta.title')}
        keywords={t('typography:meta.keyword')}
        description={t('typography:meta.description')}
        themecolor={t('typography:meta.themecolor')}
      />

      <ContentTypography />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'typography']))},
  }
}
