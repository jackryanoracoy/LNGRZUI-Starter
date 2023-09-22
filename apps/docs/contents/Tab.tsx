import React from 'react';
import PageHeading from 'components/Heading';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Tab, TabPanel, Code, Paper, Text, Utility } from 'ui';

export default function ContentTab() {
  const { t } = useTranslation('tab');
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
              <Tab>
                <TabPanel label={t('content.tab-title-one')}>
                  <Text type='title'>{t('content.tab-title-one')}</Text>
                  <Text type='paragraph'>{t("content.content-one")}</Text>
                </TabPanel>
                <TabPanel label={t('content.tab-title-two')}>
                  <Text type='title'>{t('content.tab-title-two')}</Text>
                  <Text type='paragraph'>{t("content.content-two")}</Text>
                </TabPanel>
                <TabPanel label={t('content.tab-title-three')}>
                  <Text type='title'>{t('content.tab-title-three')}</Text>
                  <Text type='paragraph'>{t("content.content-three")}</Text>
                </TabPanel>
              </Tab>
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
                <>
                  <Utility hiddenMin='md'>
                    <Text size='small' type='paragraph' weight='bold'>{t('content.props-title-properties')}, {t('content.props-title-type')}, {t('content.props-title-default')}</Text>
                  </Utility>
                  <Utility hiddenMax='md'>
                    <Row align='center'>
                      <Col xs={24} md={4}><Text type='title'>{t('content.props-title-properties')}</Text></Col>
                      <Col xs={24} md={14}><Text type='title'>{t('content.props-title-type')}</Text></Col>
                      <Col xs={24} md={6}><Text type='title'>{t('content.props-title-default')}</Text></Col>
                    </Row>
                  </Utility>
                </>
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
