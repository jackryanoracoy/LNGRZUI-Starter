import React, { lazy, Suspense } from 'react';
import { Container } from 'ui';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Loading from '../component/Loading';
import MetaData from '../component/MetaData';

const SectionGrid = lazy(() => import('../component/SectionGrid'));
const SectionButton = lazy(() => import('../component/SectionButton'));
const SectionForm = lazy(() => import('../component/SectionForm'));
const SectionCard = lazy(() => import('../component/SectionCard'));
const SectionTab = lazy(() => import('../component/SectionTab'));

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
        <Suspense fallback={<Loading />}>
          <SectionGrid />
          <SectionButton />
          <SectionForm />
          <SectionCard />
          <SectionTab />
        </Suspense>
      </Container>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common', 'grid', 'button', 'form', 'tab', 'card',
      ])),
      // Will be passed to the page component as props
    },
  }
}
