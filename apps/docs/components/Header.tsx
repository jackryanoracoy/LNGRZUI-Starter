import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Row, Col, Branding, Button, Utility } from 'ui';

export default function PageHeader() {
  const { t } = useTranslation();
  const router = useRouter();
  const home = router.pathname === '/';
  const handleClick = () => {
    const { locale } = router;
    const targetLocale = locale === 'ja' ? 'en' : 'ja';
    router.push(router.pathname, router.asPath, { locale: targetLocale });
  };

  const titleNamespace = home ? 'home' : router.pathname.replace('/', '');
  const titleKey = 'meta.title';
  const titleTranslation = t(`${titleNamespace}:${titleKey}`);

  return (
    <Utility paddingLeft={10} paddingRight={10}>
      <Row align='center' wrap='nowrap'>
        <Col xs={14} md='auto'>
          <Branding index={home} title={<Link href='/'>{home ? t('brand-name') : titleTranslation}</Link>} />
        </Col>
        <Col xs='auto' oxs='auto'>
          <Button onClick={handleClick} variant='secondary'>{t('language-button')}</Button>
        </Col>
      </Row>
    </Utility>
  )
}
