import React from 'react';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Code, Paper, Text, Loading, Utility } from 'ui';

export default function ContentLoading() {
  const { t } = useTranslation('loading');
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
              <Row>
                <Col xs={12} md={6}><Loading /></Col>
                <Col xs={12} md={6}><Loading type='ellipsis' /></Col>
                <Col xs={12} md={6}><Loading type='ripple' /></Col>
                <Col xs={12} md={6}><Loading type='bar' /></Col>
              </Row>
              <Row>
                <Col md={12}><Loading type='ring' label={t('content.loading-label-ring')} /></Col>
                <Col md={12}><Loading type='ellipsis' label={t('content.loading-label-ellipsis')} /></Col>
                <Col md={12}><Loading type='ripple' label={t('content.loading-label-ripple')} /></Col>
                <Col md={12}><Loading type='bar' label={t('content.loading-label-bar')} /></Col>
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
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-four')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-four')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-four')}</Text></Col>
              </Row>
            </Paper>
          </Content>
        </Content>
      </Container>
    </>
  )
}
