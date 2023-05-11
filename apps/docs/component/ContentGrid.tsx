import React from 'react';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Code, Card, Text, Utility } from 'ui';

export default function SectionGrid() {
  const { t } = useTranslation('grid');
  return (
    <Container>
      <Content type='section' title={t('grid.title')}>
        <Text type='paragraph'>{t('grid.desc')}</Text>

        <Content type='article' title={t('grid.example-title')}>
          <Row>
            <Col span={12}><Utility backgroundColor='primary' padding={40}>{t('grid.content-one')}</Utility></Col>
            <Col span={12}><Utility backgroundColor='secondary' padding={40}>{t('grid.content-two')}</Utility></Col>
          </Row>
          <br />
          <Row justify='center'>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='red' padding={40}>{t('grid.content-one')}</Utility></Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='blue' padding={40}>{t('grid.content-two')}</Utility></Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='green' padding={40}>{t('grid.content-three')}</Utility></Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='yellow' padding={40}>{t('grid.content-four')}</Utility></Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='purple' padding={40}>{t('grid.content-five')}</Utility></Col>
            <Col xs={12} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='orange' padding={40}>{t('grid.content-six')}</Utility></Col>
          </Row>
          <br />
          <Row align='stretch' gap={10}>
            <Col lg={8} xl={12} olg={8} oxl={12}><Card>{t('grid.content-one')}</Card></Col>
          </Row>
        </Content>

        <Content type='article' title={t('grid.code-title')}>
          <Code>{t('grid.sample-code').trim()}</Code>
        </Content>

        <Content type='article' title={t('grid.props-title')}>
          <Card>
            <Text type='title'>{t('grid.props-title-one')}</Text>
            <Utility hiddenMax='md' marginBottom={10}>
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' weight='bold'>{t('grid.props-title-properties')}</Text></Col>
                <Col xs={24} md={14}><Text type='paragraph' weight='bold'>{t('grid.props-title-type')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' weight='bold'>{t('grid.props-title-default')}</Text></Col>
              </Row>
            </Utility>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-one')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('grid.props-desc-type-one')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-one')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-two')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-two')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-two')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-three')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-three')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-three')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-four')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-four')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-four')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-five')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-five')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-five')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-six')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-six')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-six')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-seven')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-seven')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-seven')}</Text></Col>
            </Row>
          </Card>
          <br />
          <Card>
            <Text type='title'>{t('grid.props-title-two')}</Text>
            <Utility hiddenMax='md' marginBottom={10}>
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' weight='bold'>{t('grid.props-title-properties')}</Text></Col>
                <Col xs={24} md={14}><Text type='paragraph' weight='bold'>{t('grid.props-title-type')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' weight='bold'>{t('grid.props-title-default')}</Text></Col>
              </Row>
            </Utility>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-one-col')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('grid.props-desc-type-one-col')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-one-col')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-two-col')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-two-col')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-two-col')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-three-col')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-three-col')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-three-col')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-four-col')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-four-col')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-four-col')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('grid.props-desc-properties-five-col')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('grid.props-desc-type-five-col')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('grid.props-desc-default-five-col')}</Text></Col>
            </Row>
          </Card>
        </Content>
      </Content>
    </Container>
  )
}
