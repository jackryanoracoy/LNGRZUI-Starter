import { CommonProps } from '../contents/ContentTypes';
import { Layout, Header, Main, Footer } from 'ui';
import PageHeader from './Header';
import PageFooter from './Footer';

export default function PageLayout({ children }: CommonProps) {
  return (
    <Layout>
      <Header><PageHeader /></Header>
      <Main>{children}</Main>
      <Footer><PageFooter /></Footer>
    </Layout>
  )
}
