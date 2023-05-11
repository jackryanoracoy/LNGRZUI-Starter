import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';

const ContentMeta = dynamic(() => import('../component/ContentMeta'), { loading: () => <Loading /> });
const ContentGrid = dynamic(() => import('../component/ContentGrid'), { loading: () => <Loading /> });

export default function Grid() {
  const { t } = useTranslation();
  return (
    <>
      <ContentMeta
        title={t('grid.meta-title')}
        keywords={t('grid.meta-keyword')}
        description={t('grid.meta-description')}
        themecolor={t('grid.meta-themecolor')}
      />

      <ContentGrid />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {...(await serverSideTranslations(locale, ['common', 'grid']))},
  }
}
