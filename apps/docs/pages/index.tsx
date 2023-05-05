import React from 'react';
import { Container } from 'ui';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SectionButton from '../component/SectionButton';
import SectionCard from '../component/SectionCard';
import SectionTab from '../component/SectionTab';

export default function Index() {
  return (
    <Container fluid={false}>
      <SectionButton />
      <SectionCard />
      <SectionTab />
    </Container>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common', 'button', 'tab', 'card',
      ])),
      // Will be passed to the page component as props
    },
  }
}
