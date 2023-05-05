import { Layout, Header, Main, Footer } from 'ui';
import PageHeader from '../component/PageHeader';
import PageFooter from '../component/PageFooter';

export default function PageLayout({ children }) {
  return (
    <Layout>
      <Header><PageHeader /></Header>
      <Main>{children}</Main>
      <Footer><PageFooter /></Footer>
    </Layout>
  )
}
