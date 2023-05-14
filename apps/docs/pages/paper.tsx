import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';

const ContentMeta = dynamic(() => import('../component/ContentMeta'), { loading: () => <Loading /> });
const ContentPaper = dynamic(() => import('../component/ContentPaper'), { loading: () => <Loading /> });

export default function Index() {
  const { t } = useTranslation('paper');
  return (
    <>
      <ContentMeta
        title={t('meta.title')}
        keywords={t('meta.keyword')}
        description={t('meta.description')}
        themecolor={t('meta.themecolor')}
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
