import React from 'react';
import PageHeading from 'components/Heading';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Code, Paper, Card, Text, Utility } from 'ui';

export default function ContentCard() {
  const { t } = useTranslation('card');
  return (
    <>
      <PageHeading>
        <Text type='hero' variant='primary' transform='uppercase'>{t('title')}</Text>
        <Text type='paragraph'>{t('description')}</Text>
      </PageHeading>
      <Container>
        <Content type='section' title={t('content.overview-title')}>
          <Text type='paragraph'>{t('content.overview-desc')}</Text>

          <Content type='article' title={t('content.example-title')}>
            <Paper>
              <Row gap={10} align='stretch'>
                <Col md={8}><Card header={<Text type='title'>{t('content.title-one')}</Text>}>{t('content.content-one')}</Card></Col>
                <Col md={8}><Card header={<Text type='title'>{t('content.title-two')}</Text>}>{t('content.content-two')}</Card></Col>
                <Col md={8}><Card>{t('content.content-three')}</Card></Col>
              </Row>
            </Paper>
          </Content>
        </Content>
      </Container>
      <Container>
        <Content type='section' title={t('content.how-to-title')}>
          <Text type='paragraph'>{t('content.how-to-desc')}</Text>

          <Content type='article' title={t('content.code-title')}>
            <Code>{t('content.sample-code').trim()}</Code>
          </Content>

          <Content type='article' title={t('content.props-title')}>
            <Paper
              header={
                <Utility hiddenMax='md'>
                  <Row align='center'>
                    <Col xs={24} md={4}><Text type='title'>{t('content.props-title-properties')}</Text></Col>
                    <Col xs={24} md={14}><Text type='title'>{t('content.props-title-type')}</Text></Col>
                    <Col xs={24} md={6}><Text type='title'>{t('content.props-title-default')}</Text></Col>
                  </Row>
                </Utility>
              }
            >
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-one')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('content.props-desc-type-one')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-one')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-two')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-two')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-two')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-three')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('content.props-desc-type-three')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-three')}</Text></Col>
              </Row>
            </Paper>
          </Content>
        </Content>
      </Container>
    </>
  )
}
