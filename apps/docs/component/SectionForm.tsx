import React from 'react';
import { useTranslation } from 'next-i18next';
import { InputProps } from './Types';
import { Row, Col, Content, Code, Card, Text, Utility, Form } from 'ui';

export default function SectionForm() {
  const { t } = useTranslation('form');
  const handleSubmit = (data: InputProps[]) => {
    console.log(data);
  };
  return (
    <Content type='section' title={t('form.title')}>
      <Text type='paragraph'>{t('form.desc')}</Text>

      <Content type='article' title={t('form.example-title')}>
        <Card>
          <Text type='title'>{t('form.form-title')}</Text>
          <Form
            onSubmit={handleSubmit}
            initialInputs={[
              { id: '0', label: t('form.input-text') , type: 'text', placeholder: t('form.placeholder-text'), value: '' },
              { id: '2', label: t('form.input-email'), type: 'email', placeholder: t('form.placeholder-email'), value: '' },
              { id: '3', label: t('form.input-number'), type: 'number', placeholder: t('form.placeholder-number'), value: '' },
              { id: '4', label: t('form.input-textarea'), type: 'textarea', placeholder: t('form.placeholder-textarea'), value: '' },
            ]}
            buttonLabel={t('form.submit-button')}
          />
        </Card>
      </Content>

      <Content type='article' title={t('form.code-title')}>
        <Code>{t('form.sample-code').trim()}</Code>
      </Content>

      <Content type='article' title={t('form.props-title')}>
        <Card>
          <Utility hiddenMax='md' marginBottom={10}>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' weight='bold'>{t('form.props-title-properties')}</Text></Col>
              <Col xs={24} md={14}><Text type='paragraph' weight='bold'>{t('form.props-title-type')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' weight='bold'>{t('form.props-title-default')}</Text></Col>
            </Row>
          </Utility>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-one')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-one')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-one')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-two')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-two')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-two')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-three')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-three')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-three')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-four')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-four')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-four')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-five')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-five')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-five')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-six')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-six')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-six')}</Text></Col>
          </Row>
          <Row align='center'>
            <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-seven')}</Text></Col>
            <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-seven')}</Text></Col>
            <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-seven')}</Text></Col>
          </Row>
        </Card>
      </Content>
    </Content>
  )
}