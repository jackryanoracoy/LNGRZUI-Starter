import React from 'react';
import dynamic from 'next/dynamic';
import Meta from 'components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageContainer() {
  const { t } = useTranslation(['common', 'container']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentContainer = dynamic(() => import('contents/Container'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('container:meta.title')}
        keywords={t('container:meta.keyword')}
        description={t('container:meta.description')}
        themecolor={t('container:meta.themecolor')}
      />

      <ContentContainer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'container']))},
  }
}
