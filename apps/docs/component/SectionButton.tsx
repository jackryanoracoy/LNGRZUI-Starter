import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Row, Col, Content, Button, Code, Card, Text, Utility } from 'ui';

export default function SectionButton() {
  const { t } = useTranslation('button');
  const handleClick = () => alert(t('button.button-clicked'));

  return (
    <Content type='section' title={t('button.title')}>
      <Text type='paragraph'>{t('button.desc')}</Text>

      <Content type='article' title={t('button.example-title')}>
        <Utility marginBottom={10}>
          <Button>{t('button.default')}</Button>&nbsp;
        </Utility>
        <Utility marginBottom={10}>
          <Button size="small" onClick={handleClick}>{t('button.small')}</Button>&nbsp;
          <Button size="medium" onClick={handleClick}>{t('button.medium')}</Button>&nbsp;
          <Button size="large" onClick={handleClick}>{t('button.large')}</Button>&nbsp;
        </Utility>
        <Utility marginBottom={10}>
          <Button variant='primary' onClick={handleClick}>{t('button.primary')}</Button>&nbsp;
          <Button variant='secondary' onClick={handleClick}>{t('button.secondary')}</Button>&nbsp;
          <Button variant='light' onClick={handleClick}>{t('button.light')}</Button>&nbsp;
          <Button variant='dark' onClick={handleClick}>{t('button.dark')}</Button>&nbsp;
          <Button variant='success' onClick={handleClick}>{t('button.success')}</Button>&nbsp;
          <Button variant='warning' onClick={handleClick}>{t('button.warning')}</Button>&nbsp;
          <Button variant='danger' onClick={handleClick}>{t('button.danger')}</Button>&nbsp;
          <Button variant='info' onClick={handleClick}>{t('button.info')}</Button>&nbsp;
        </Utility>
        <Utility marginBottom={10}>
          <Button display='block' onClick={handleClick}>{t('button.block')}</Button>
        </Utility>
        <Utility marginBottom={10}>
          <Link href={'/ja'}><Button>{t('button.internal-link')}</Button></Link>&nbsp;
          <Link href={'https://example.com'} target='_blank'><Button>{t('button.external-link')}</Button></Link>&nbsp;
          <Button disabled>{t('button.disabled')}</Button>&nbsp;
        </Utility>
      </Content>

      <Content type='article' title={t('button.code-title')}>
        <Code>{t('button.sample-code').trim()}</Code>
      </Content>

      <Content type='article' title={t('button.props-title')}>
        <Card>
          <Utility hiddenMax='md' marginBottom={10}>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' weight='bold'>{t('button.props-title-properties')}</Text></Col>
              <Col xs={24} md={14}><Text type='paragraph' weight='bold'>{t('button.props-title-type')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' weight='bold'>{t('button.props-title-default')}</Text></Col>
            </Row>
          </Utility>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('button.props-desc-properties-one')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('button.props-desc-type-one')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('button.props-desc-default-one')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('button.props-desc-properties-two')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('button.props-desc-type-two')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('button.props-desc-default-two')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('button.props-desc-properties-three')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('button.props-desc-type-three')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('button.props-desc-default-three')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('button.props-desc-properties-four')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('button.props-desc-type-four')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('button.props-desc-default-four')}</Text></Col>
          </Row>
        </Card>
      </Content>
    </Content>
  )
}
