import { useRouter } from 'next/router';
import { CommonProps } from './ComponentTypes';
import { Layout, Header, Main, Sider, Footer } from 'ui';
import PageHeader from '../component/PageHeader';
import PageSider from '../component/PageSider';
import PageFooter from '../component/PageFooter';

export default function PageLayout({ children }: CommonProps) {
  const router = useRouter();
  const home = router.pathname === '/';
  return (
    home ? (
      <Layout>
        <Header><PageHeader /></Header>
        <Main>{children}</Main>
        <Footer><PageFooter /></Footer>
      </Layout>
    ) : (
      <Layout>
        <Header><PageHeader /></Header>
        <Layout>
          <Sider><PageSider /></Sider>
          <Main>{children}</Main>
        </Layout>
        <Footer><PageFooter /></Footer>
      </Layout>
    )
  )
}
