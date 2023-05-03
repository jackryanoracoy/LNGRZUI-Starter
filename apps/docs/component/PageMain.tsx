import { Container } from 'ui';

export default function PageMain({ children }) {
  return (
    <Container fluid={false}>
      {children}
    </Container>
  )
}
