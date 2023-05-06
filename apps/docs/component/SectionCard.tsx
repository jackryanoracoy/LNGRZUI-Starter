import React from 'react';
import { useTranslation } from 'next-i18next'
import { Row, Col, Content, Code, Card, Text, Utility } from 'ui';

export default function SectionCard() {
  const { t } = useTranslation(['card']);
  return (
    <Content type='section' title={t('card.title')}>
      <Text type='paragraph'>{t('card.desc')}</Text>

      <Content type='article' title={t('card.example-title')}>
        <Row gap={10} align='stretch'>
          <Col md={8}><Card>{t('card.content-one')}</Card></Col>
          <Col md={8}><Card>{t('card.content-two')}</Card></Col>
          <Col md={8}><Card>{t('card.content-three')}</Card></Col>
        </Row>
      </Content>

      <Content type='article' title={t('card.code-title')}>
        <Code>{t('card.sample-code').trim()}</Code>
      </Content>

      <Content type='article' title={t('card.props-title')}>
        <Card>
          <Utility hiddenMax='md' marginBottom={10}>
            <Row>
              <Col xs={24} md={4}><Text type='paragraph' weight='bold'>{t('card.props-title-properties')}</Text></Col>
              <Col xs={24} md={14}><Text type='paragraph' weight='bold'>{t('card.props-title-type')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' weight='bold'>{t('card.props-title-default')}</Text></Col>
            </Row>
          </Utility>
          <Row>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('card.props-desc-properties-one')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('card.props-desc-type-one')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('card.props-desc-default-one')}</Text></Col>
          </Row>
          <Row>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('card.props-desc-properties-two')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('card.props-desc-type-two')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('card.props-desc-default-two')}</Text></Col>
          </Row>
        </Card>
      </Content>
    </Content>
  )
}
