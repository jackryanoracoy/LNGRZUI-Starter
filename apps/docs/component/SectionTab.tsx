import React from 'react';
import { useTranslation } from 'next-i18next';
import { Row, Col, Content, Tab, TabPanel, Code, Card, Text, Utility } from 'ui';

export default function SectionTab() {
  const { t } = useTranslation('tab');
  return (
    <Content type='section' title={t('tab.title')}>
      <Text type='paragraph'>{t('tab.desc')}</Text>

      <Content type='article' title={t('tab.example-title')}>
        <Tab>
          <TabPanel label={t('tab.tab-title-one')}>
            <Text type='title'>{t('tab.tab-title-one')}</Text>
            <Text type='paragraph'>{t("tab.content-one")}</Text>
          </TabPanel>
          <TabPanel label={t('tab.tab-title-two')}>
            <Text type='title'>{t('tab.tab-title-two')}</Text>
            <Text type='paragraph'>{t("tab.content-two")}</Text>
          </TabPanel>
          <TabPanel label={t('tab.tab-title-three')}>
            <Text type='title'>{t('tab.tab-title-three')}</Text>
            <Text type='paragraph'>{t("tab.content-three")}</Text>
          </TabPanel>
        </Tab>
      </Content>

      <Content type='article' title={t('tab.code-title')}>
        <Code>{t('tab.sample-code').trim()}</Code>
      </Content>

      <Content type='article' title={t('tab.props-title')}>
        <Card>
          <Utility hiddenMax='md' marginBottom={10}>
            <Row>
              <Col xs={24} md={4}><Text type='paragraph' weight='bold'>{t('tab.props-title-properties')}</Text></Col>
              <Col xs={24} md={14}><Text type='paragraph' weight='bold'>{t('tab.props-title-type')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' weight='bold'>{t('tab.props-title-default')}</Text></Col>
            </Row>
          </Utility>
          <Row>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('tab.props-desc-properties-one')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('tab.props-desc-type-one')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('tab.props-desc-default-one')}</Text></Col>
          </Row>
          <Row>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('tab.props-desc-properties-two')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('tab.props-desc-type-two')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('tab.props-desc-default-two')}</Text></Col>
          </Row>
          <Row>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('tab.props-desc-properties-three')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('tab.props-desc-type-three')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('tab.props-desc-default-three')}</Text></Col>
          </Row>
        </Card>
      </Content>
    </Content>
  )
}
