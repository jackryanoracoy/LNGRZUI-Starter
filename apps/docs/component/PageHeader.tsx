import Link from 'next/link';
import { useRouter } from 'next/router';
import { Branding } from 'ui';

export default function PageHeader() {
  const router = useRouter();
  const homePage = router.pathname === "/";
  return (
    <Branding home={homePage} className='TEST'><Link href="/">Home</Link></Branding>
  )
}
