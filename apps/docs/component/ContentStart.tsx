import React from 'react';
import { useTranslation } from 'next-i18next';
import { Container, Content, Code, Text } from 'ui';

export default function ContentStart() {
  const { t } = useTranslation('start');
  return (
    <Container>
      <Content type='section' title={t('start.title')}>
        <Text type='paragraph'>{t('start.desc')}</Text>

        <Content type='article' title={t('start.code-title')}>
          <Code>{t('start.sample-code').trim()}</Code>
        </Content>
      </Content>
    </Container>
  )
}
