import React from 'react';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Code, Paper, Text, Utility } from 'ui';

export default function ContentCode() {
  const { t } = useTranslation('code');
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

          <Content type='article' title={t('content.example-title')}>
            <Paper>
              <Code language='html'>{t('content.content-one')}</Code>
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
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-three')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-three')}</Text></Col>
              </Row>
            </Paper>
          </Content>
        </Content>
      </Container>
    </>
  )
}
