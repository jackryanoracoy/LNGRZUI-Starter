import { CommonType } from 'types/CommonType';
import { Container, Content, Utility } from 'ui';

export default function PageHeading({ children }: CommonType) {

  return (
    <Utility backgroundColor='grey-100'>
      <Container>
        <Content type='section'>
          {children}
        </Content>
      </Container>
    </Utility>
  )
}
