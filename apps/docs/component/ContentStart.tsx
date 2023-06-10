import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container, Content, Row, Col, Card, Code, Text, List, Utility } from 'ui';

export default function ContentStart() {
  const { t } = useTranslation('start');
  const featureItems = [
    { id: 1, text: t('content.feature-one') },
    { id: 2, text: t('content.feature-two') },
    { id: 3, text: t('content.feature-three') },
    { id: 4, text: t('content.feature-four') },
    { id: 5, text: t('content.feature-five') },
  ];

  const technologyItems = [
    { id: 1, link: <Link href={t('content.technology-link-one')} target='_blank'>{t('content.technology-one')}</Link> },
    { id: 2, link: <Link href={t('content.technology-link-two')} target='_blank'>{t('content.technology-two')}</Link> },
    { id: 3, link: <Link href={t('content.technology-link-three')} target='_blank'>{t('content.technology-three')}</Link> },
    { id: 4, link: <Link href={t('content.technology-link-four')} target='_blank'>{t('content.technology-four')}</Link> },
  ];

  const usefulLinkItems = [
    { id: 1, link: <Link href={t('content.useful-link-link-one')} target='_blank'>{t('content.useful-link-one')}</Link> },
    { id: 2, link: <Link href={t('content.useful-link-link-two')} target='_blank'>{t('content.useful-link-two')}</Link> },
    { id: 3, link: <Link href={t('content.useful-link-link-three')} target='_blank'>{t('content.useful-link-three')}</Link> },
    { id: 4, link: <Link href={t('content.useful-link-link-four')} target='_blank'>{t('content.useful-link-four')}</Link> },
    { id: 5, link: <Link href={t('content.useful-link-link-five')} target='_blank'>{t('content.useful-link-five')}</Link> },
    { id: 6, link: <Link href={t('content.useful-link-link-six')} target='_blank'>{t('content.useful-link-six')}</Link> },
  ];
  return (
    <>
      <Utility backgroundColor='grey-100'>
        <Container>
          <Content type='section'>
            <Text type='hero' variant='primary' transform='uppercase'>{t('title')}</Text>
            <Text type='paragraph'>{t('description')}</Text>
          </Content>
        </Container>
      </Utility>
      <Container>
        <Content type='section' title={t('content.overview-title')}>
          <Text type='paragraph'>{t('content.overview-desc')}</Text>
        </Content>

        <Content type='section' title={t('content.intro-title')}>
          <Text type='paragraph'>{t('content.intro-desc')}</Text>

          <Content type='article'>
            <Row gap={10} align='stretch'>
              <Col xs={24} lg={12}>
                <Card header={t('content.feature-title')}><List type='decimal' items={featureItems} /></Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card header={t('content.technology-title')}><List type='disc' items={technologyItems} /></Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card header={t('content.useful-link-title')}><List type='disc' items={usefulLinkItems} /></Card>
              </Col>
            </Row>
          </Content>
        </Content>

        <Content type='section' title={t('content.setup-title')}>
          <Text type='paragraph'>{t('content.setup-desc')}</Text>
            <Content type='article' title={t('content.guide-title')}>
              <Utility paddingBottom={20}>
                <Text type='paragraph'>{t('content.clone-desc')}</Text>
                <Code language='html'>{t('content.clone-code').trim()}</Code>
              </Utility>
              <Utility paddingBottom={20}>
                <Text type='paragraph'>{t('content.install-desc')}</Text>
                <Code language='html'>{t('content.install-code').trim()}</Code>
              </Utility>
              <Utility paddingBottom={20}>
                <Text type='paragraph'>{t('content.run-desc')}</Text>
                <Code language='html'>{t('content.run-code').trim()}</Code>
              </Utility>
              <Utility paddingBottom={20}>
                <Text type='paragraph'>{t('content.docs-desc')}</Text>
                <Code language='html'>{t('content.docs-code').trim()}</Code>
              </Utility>
              <Utility paddingBottom={20}>
                <Text type='paragraph'>{t('content.front-desc')}</Text>
                <Code language='html'>{t('content.front-code').trim()}</Code>
              </Utility>
              <Utility paddingBottom={20}>
                <Text type='paragraph'><span dangerouslySetInnerHTML={{__html: t('content.open-desc')}} /></Text>
              </Utility>
            </Content>
          </Content>

      </Container>
    </>
  )
}
