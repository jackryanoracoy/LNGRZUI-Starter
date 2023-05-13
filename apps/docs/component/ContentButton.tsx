import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Button, Code, Paper, Text, Utility } from 'ui';

export default function SectionButton() {
  const { t } = useTranslation('button');
  const handleClick = () => alert(t('content.button-clicked'));

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
              <Utility marginBottom={10}>
                <Button>{t('content.default')}</Button>&nbsp;
              </Utility>
              <Utility marginBottom={10}>
                <Button size="small" onClick={handleClick}>{t('content.small')}</Button>&nbsp;
                <Button size="medium" onClick={handleClick}>{t('content.medium')}</Button>&nbsp;
                <Button size="large" onClick={handleClick}>{t('content.large')}</Button>&nbsp;
              </Utility>
              <Utility marginBottom={10}>
                <Button variant='primary' onClick={handleClick}>{t('content.primary')}</Button>&nbsp;
                <Button variant='secondary' onClick={handleClick}>{t('content.secondary')}</Button>&nbsp;
                <Button variant='light' onClick={handleClick}>{t('content.light')}</Button>&nbsp;
                <Button variant='dark' onClick={handleClick}>{t('content.dark')}</Button>&nbsp;
                <Button variant='success' onClick={handleClick}>{t('content.success')}</Button>&nbsp;
                <Button variant='warning' onClick={handleClick}>{t('content.warning')}</Button>&nbsp;
                <Button variant='danger' onClick={handleClick}>{t('content.danger')}</Button>&nbsp;
                <Button variant='info' onClick={handleClick}>{t('content.info')}</Button>&nbsp;
              </Utility>
              <Utility marginBottom={10}>
                <Button display='block' onClick={handleClick}>{t('content.block')}</Button>
              </Utility>
              <Utility marginBottom={10}>
                <Link href={'/ja'}><Button>{t('content.internal-link')}</Button></Link>&nbsp;
                <Link href={'https://example.com'} target='_blank'><Button>{t('content.external-link')}</Button></Link>&nbsp;
                <Button disabled>{t('content.disabled')}</Button>&nbsp;
              </Utility>
            </Paper>
          </Content>
        </Content>
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
