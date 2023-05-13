import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';

const ContentMeta = dynamic(() => import('../component/ContentMeta'), { loading: () => <Loading /> });
const ContentButton = dynamic(() => import('../component/ContentButton'), { loading: () => <Loading /> });

export default function Button() {
  const { t } = useTranslation('button');
  return (
    <>
      <ContentMeta
        title={t('meta.title')}
        keywords={t('meta.keyword')}
        description={t('meta.description')}
        themecolor={t('meta.themecolor')}
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
