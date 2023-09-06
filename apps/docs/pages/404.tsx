import React from 'react';
import dynamic from 'next/dynamic';
import Meta from 'components/Meta';
import pagesData from 'public/pages-data.json';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Loading } from 'ui';

export default function PageNotFound({ statusCode }) {
  const { t } = useTranslation(['common', '404']);
  const LoadingComponent = () => <Loading label={t('content.loading-label')} />;
  const ContentError = dynamic(() => import('contents/Error'), { loading: LoadingComponent });

  return (
    <>
      <Meta
        title={t('404:meta.title')}
        keywords={t('404:meta.keyword')}
        description={t('404:meta.description')}
        themecolor={t('404:meta.themecolor')}
      />

      <ContentError pagesData={pagesData} statusCode={statusCode} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', '404'])),
      statusCode: 404,
    },
  }
}

