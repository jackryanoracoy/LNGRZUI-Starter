import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';
import pagesData from '../public/pages-data.json';

const Meta = dynamic(() => import('../component/Meta'), { loading: () => <Loading /> });
const ContentHome = dynamic(() => import('../component/ContentHome'), { loading: () => <Loading /> });

export default function Index() {
  const { t } = useTranslation('home');
  return (
    <>
      <Meta
        title={t('meta.title')}
        keywords={t('meta.keyword')}
        description={t('meta.description')}
        themecolor={t('meta.themecolor')}
      />

      <ContentHome pagesData={pagesData} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'home']))},
  }
}

