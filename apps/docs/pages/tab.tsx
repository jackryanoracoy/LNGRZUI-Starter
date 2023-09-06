import React from 'react';
import dynamic from 'next/dynamic';
import Meta from 'components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageTab() {
  const { t } = useTranslation(['common', 'tab']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentTab = dynamic(() => import('contents/Tab'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('tab:meta.title')}
        keywords={t('tab:meta.keyword')}
        description={t('tab:meta.description')}
        themecolor={t('tab:meta.themecolor')}
      />

      <ContentTab />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'tab']))},
  }
}
