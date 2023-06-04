import { CommonProps } from './ComponentTypes';
import { Layout, Header, Main, Sider, Footer } from 'ui';
import PageHeader from '../component/PageHeader';
import PageFooter from '../component/PageFooter';

export default function PageLayout({ children }: CommonProps) {
  return (
    <Layout>
      <Header><PageHeader /></Header>
      <Main>{children}</Main>
      <Footer><PageFooter /></Footer>
    </Layout>
  )
}
