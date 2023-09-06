import React from 'react';
import dynamic from 'next/dynamic';
import Meta from 'components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageCode() {
  const { t } = useTranslation(['common', 'code']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentCode = dynamic(() => import('contents/Code'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('code:meta.title')}
        keywords={t('code:meta.keyword')}
        description={t('code:meta.description')}
        themecolor={t('code:meta.themecolor')}
      />

      <ContentCode />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'code']))},
  }
}
