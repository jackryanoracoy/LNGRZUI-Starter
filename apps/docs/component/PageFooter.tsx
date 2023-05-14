import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Row, Col, Text, Utility } from 'ui';
import docsVersion from '../package.json';
import uiVersion from 'ui/package.json';

export default function PageFooter() {
  const { t } = useTranslation();
  return (
    <Utility
      paddingTop={30}
      paddingRight={10}
      paddingBottom={30}
      paddingLeft={10}
    >
      <Row align='center'>
        <Col md={12}>
          <Text weight='bold' variant='light'>{t('brand-name')}</Text>
          <Text size='small' variant='light'>
            {t('footer.docs-version')} {docsVersion.version} - {t('footer.ui-version')} {uiVersion.version}
          </Text>
        </Col>
        <Col md='auto' omd='auto'>
          <Text size='small' variant='light'>
            {`${t('footer.language')}: `}
            <Link href={''} locale="en">EN</Link> | <Link href={''} locale="ja">JA</Link>
          </Text>
        </Col>
      </Row>
    </Utility>
  )
}
