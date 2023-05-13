import React from 'react';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Code, Paper, Card, Text, Utility } from 'ui';

export default function SectionGrid() {
  const { t } = useTranslation('grid');
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
                <Col span={12}><Utility backgroundColor='primary' padding={40}>{t('content.content-one')}</Utility></Col>
                <Col span={12}><Utility backgroundColor='secondary' padding={40}>{t('content.content-two')}</Utility></Col>
              </Row>
              <br />
              <Row justify='center'>
                <Col xs={24} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='red' padding={40}>{t('content.content-one')}</Utility></Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='blue' padding={40}>{t('content.content-two')}</Utility></Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='green' padding={40}>{t('content.content-three')}</Utility></Col>
                <Col xs={24} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='yellow' padding={40}>{t('content.content-four')}</Utility></Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='purple' padding={40}>{t('content.content-five')}</Utility></Col>
                <Col xs={12} sm={12} md={8} lg={6} xl={4}><Utility backgroundColor='orange' padding={40}>{t('content.content-six')}</Utility></Col>
              </Row>
              <br />
              <Row align='stretch' gap={10}>
                <Col lg={8} xl={12} olg={8} oxl={12}><Card>{t('content.content-one')}</Card></Col>
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
            <Text type='article' size='medium'>{t('content.props-title-one')}</Text>
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
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-four')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-four')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-four')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-five')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-five')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-five')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-six')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-six')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-six')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-seven')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-seven')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-seven')}</Text></Col>
              </Row>
            </Paper>
            <br />
            <Text type='article' size='medium'>{t('content.props-title-two')}</Text>
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
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-one-col')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('content.props-desc-type-one-col')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-one-col')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-two-col')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-two-col')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-two-col')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-three-col')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-three-col')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-three-col')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-four-col')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-four-col')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-four-col')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-five-col')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-five-col')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-five-col')}</Text></Col>
              </Row>
            </Paper>
          </Content>
        </Content>
      </Container>
    </>
  )
}
