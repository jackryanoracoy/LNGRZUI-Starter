import React from 'react';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Code, Card, Text, Utility, Form } from 'ui';

export default function SectionForm() {
  const { t } = useTranslation('form');
  const handleSubmit = (formData: {[key: string]: string}) => {
    console.log('Form submitted with data:', formData);
  };
  const inputs = [
    {
      label: t('form.input-text'),
      placeholder: t('form.placeholder-text'),
      name: 'text',
      type: 'text',
      value: '',
      required: true,
    },
    {
      label: t('form.input-email'),
      placeholder: t('form.placeholder-email'),
      name: 'email',
      type: 'email',
      value: ''
    },
    {
      label: t('form.input-number'),
      placeholder: t('form.placeholder-number'),
      name: 'number',
      type: 'number',
      value: ''
    }
  ];
  const textAreas = [
    {
      label: t('form.input-textarea'),
      placeholder: t('form.placeholder-textarea'),
      name: 'textarea',
      value: ''
    }
  ];
  return (
    <Container>
      <Content type='section' title={t('form.title')}>
        <Text type='paragraph'>{t('form.desc')}</Text>

        <Content type='article' title={t('form.example-title')}>
          <Card>
            <Text type='title'>{t('form.form-title')}</Text>
            <Form
              onSubmit={handleSubmit}
              inputs={inputs}
              textAreas={textAreas}
              submitButtonLabel={t('form.submit-button')}
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
              <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('form.props-desc-type-one')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-one')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-two')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('form.props-desc-type-two')}</Text></Col>
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
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-eight')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-eight')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-eight')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-nine')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-nine')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-nine')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('form.props-desc-properties-ten')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('form.props-desc-type-ten')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('form.props-desc-default-ten')}</Text></Col>
            </Row>
          </Card>
        </Content>
      </Content>
    </Container>
  )
}
