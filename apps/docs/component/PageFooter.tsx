import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container, Content, Row, Col, Text, Utility } from 'ui';

export default function PageFooter() {
  const { t } = useTranslation();
  return (
    <Utility padding={10}>
      <Row align='center'>
        <Col md={12}><Text size='small' variant='light'>{t('title')}</Text></Col>
        <Col md='auto' omd='auto'>
          <Text size='small' variant='light'>{t('language')}: <Link href={'/'} locale="en">EN</Link> | <Link href={'/'} locale="ja">JA</Link></Text>
        </Col>
      </Row>
    </Utility>
  )
}
