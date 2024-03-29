import React from 'react';
import dynamic from 'next/dynamic';
import Meta from 'components/Meta';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageForm() {
  const { t } = useTranslation(['common', 'form']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentForm = dynamic(() => import('contents/Form'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('form:meta.title')}
        keywords={t('form:meta.keyword')}
        description={t('form:meta.description')}
        themecolor={t('form:meta.themecolor')}
      />

      <ContentForm />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'form']))},
  }
}
