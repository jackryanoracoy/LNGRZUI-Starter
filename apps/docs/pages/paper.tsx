import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PagePaper() {
  const { t } = useTranslation(['common', 'paper']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentPaper = dynamic(() => import('../contents/Paper'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('paper:meta.title')}
        keywords={t('paper:meta.keyword')}
        description={t('paper:meta.description')}
        themecolor={t('paper:meta.themecolor')}
      />

      <ContentPaper />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'paper']))},
  }
}
