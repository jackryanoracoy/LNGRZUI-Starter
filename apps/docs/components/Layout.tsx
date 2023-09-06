import PageHeader from 'components/Header';
import PageFooter from 'components/Footer';
import { CommonType } from 'types/CommonType';
import { Layout, Header, Main, Footer } from 'ui';

export default function PageLayout({ children }: CommonType) {
  return (
    <Layout>
      <Header><PageHeader /></Header>
      <Main>{children}</Main>
      <Footer><PageFooter /></Footer>
    </Layout>
  )
}
