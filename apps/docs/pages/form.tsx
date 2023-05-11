import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';

const ContentMeta = dynamic(() => import('../component/ContentMeta'), { loading: () => <Loading /> });
const ContentForm = dynamic(() => import('../component/ContentForm'), { loading: () => <Loading /> });

export default function Form() {
  const { t } = useTranslation();
  return (
    <>
      <ContentMeta
        title={t('form.meta-title')}
        keywords={t('form.meta-keyword')}
        description={t('form.meta-description')}
        themecolor={t('form.meta-themecolor')}
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
