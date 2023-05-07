import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container, Content, Row, Col, Text } from 'ui';

export default function PageFooter() {
  const { t } = useTranslation();
  return (
    <Container>
      <Content>
        <Row align='center'>
          <Col md={12}><Text variant='light'>{t('title')}</Text></Col>
          <Col md='auto' omd='auto'>
            <Text variant='light'>{t('language')}: <Link href={'/'} locale="en">EN</Link> | <Link href={'/'} locale="ja">JA</Link></Text>
          </Col>
        </Row>
      </Content>
    </Container>
  )
}
