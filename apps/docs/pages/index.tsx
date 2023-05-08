import React from 'react';
import { Container } from 'ui';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import MetaData from '../component/MetaData';
import SectionGrid from '../component/SectionGrid';
import SectionButton from '../component/SectionButton';
import SectionCard from '../component/SectionCard';
import SectionTab from '../component/SectionTab';

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <MetaData
        title={t('meta.title')}
        keywords={t('meta.keyword')}
        description={t('meta.description')}
        themecolor={t('meta.themecolor')}
      />

      <Container fluid={false}>
        <SectionGrid />
        <SectionButton />
        <SectionCard />
        <SectionTab />
      </Container>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common', 'grid', 'button', 'tab', 'card',
      ])),
      // Will be passed to the page component as props
    },
  }
}
