import React from 'react';
import dynamic from 'next/dynamic';
import Meta from '../components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageUtility() {
  const { t } = useTranslation(['common', 'utility']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentUtility = dynamic(() => import('../contents/Utility'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('utility:meta.title')}
        keywords={t('utility:meta.keyword')}
        description={t('utility:meta.description')}
        themecolor={t('utility:meta.themecolor')}
      />

      <ContentUtility />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'utility']))},
  }
}
