import React from 'react';
import { useTranslation } from 'next-i18next';
import { Container, Content, Code, Text, Utility } from 'ui';

export default function ContentStart() {
  const { t } = useTranslation('start');
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

          <Content type='article' title={t('content.code-title')}>
            <Code>{t('start.sample-code').trim()}</Code>
          </Content>
        </Content>
      </Container>
    </>
  )
}
