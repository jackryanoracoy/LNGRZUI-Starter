import React from 'react';
import dynamic from 'next/dynamic';
import Meta from 'components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageCard() {
  const { t } = useTranslation(['common', 'card']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentCard = dynamic(() => import('contents/Card'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('card:meta.title')}
        keywords={t('card:meta.keyword')}
        description={t('card:meta.description')}
        themecolor={t('card:meta.themecolor')}
      />

      <ContentCard />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'card']))},
  }
}
