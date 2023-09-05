import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageButton() {
  const { t } = useTranslation(['common', 'button']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentButton = dynamic(() => import('../contents/Button'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('button:meta.title')}
        keywords={t('button:meta.keyword')}
        description={t('button:meta.description')}
        themecolor={t('button:meta.themecolor')}
      />

      <ContentButton />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'button']))},
  }
}
