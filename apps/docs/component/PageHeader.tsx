import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import { Branding } from 'ui';

export default function PageHeader() {
  const { t } = useTranslation();
  const router = useRouter();
  const homePage = router.pathname === "/";
  return (
    <Branding home={homePage}><Link href="/">{t('title')}</Link></Branding>
  )
}
