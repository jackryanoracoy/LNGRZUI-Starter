import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';
import pagesData from '../public/pages-data.json';

const Meta = dynamic(() => import('../component/Meta'), { loading: () => <Loading /> });
const ContentError = dynamic(() => import('../component/ContentError'), { loading: () => <Loading /> });

export default function PageNotFound({ statusCode }) {
  const { t } = useTranslation('404');
  return (
    <>
      <Meta
        title={t('meta.title')}
        keywords={t('meta.keyword')}
        description={t('meta.description')}
        themecolor={t('meta.themecolor')}
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

