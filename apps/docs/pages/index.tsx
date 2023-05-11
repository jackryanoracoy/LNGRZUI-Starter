import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';
import pagesData from '../public/pages-data.json';

const ContentMeta = dynamic(() => import('../component/ContentMeta'), { loading: () => <Loading /> });
const ContentHome = dynamic(() => import('../component/ContentHome'), { loading: () => <Loading /> });

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <ContentMeta
        title={t('home.meta-title')}
        keywords={t('home.meta-keyword')}
        description={t('home.meta-description')}
        themecolor={t('home.meta.themecolor')}
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

