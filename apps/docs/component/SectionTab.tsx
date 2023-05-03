import React from 'react';
import { Row, Col, Content, Tab, TabPanel, Code, Card, Text } from 'ui';

export default function SectionTab() {
  return (
    <Content type='section'>
      <Text type='hero'>Tab</Text>
      <Text type='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</Text>

      <Content type='article' title='When to Use'>
        <Text type='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</Text>
      </Content>

      <Content type='article' title='Basic Example'>
        <Tab>
          <TabPanel label='Tab One'>
            <Text type='title'>Tab One Title</Text>
            <Text type='paragraph'>This is the tab one content.</Text>
            <Text type='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aenean commodo ligula eget dolor. Aenean massa.</Text>
          </TabPanel>
          <TabPanel label='Tab Two'>
            <Text type='title'>Tab Two Title</Text>
            <Text type='paragraph'>This is the tab two content.</Text>
            <Text type='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Text>
          </TabPanel>
          <TabPanel label='Tab Three'>
            <Text type='title'>Tab Three Title</Text>
            <Text type='paragraph'>This is the tab three content.</Text>
            <Text type='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</Text>
          </TabPanel>
        </Tab>
      </Content>

      <Content type='article' title='Code'>
        <Code>{code.trim()}</Code>
      </Content>

      <Content type='article' title='Props'>
        <Card>
          <Row>
            <Col xs={24} md={6}><Text type='code' weight='bold'>Properties</Text></Col>
            <Col xs={24} md={12}><Text type='code' weight='bold'>Type</Text></Col>
            <Col xs={24} md={6}><Text type='code' weight='bold'>Default</Text></Col>
          </Row>
          <Row>
            <Col span={6}><Text type='code' size='small'>children</Text></Col>
            <Col span={12}><Text type='code' size='small' variant='warning'>React.ReactNode</Text></Col>
            <Col span={6}><Text type='code' size='small'>{}</Text></Col>
          </Row>
          <Row>
            <Col span={6}><Text type='code' size='small'>className</Text></Col>
            <Col span={12}><Text type='code' size='small' variant='warning'>React.ReactNode</Text></Col>
            <Col span={6}><Text type='code' size='small'>{}</Text></Col>
          </Row>
          <Row>
            <Col span={6}><Text type='code' size='small'>label</Text></Col>
            <Col span={12}><Text type='code' size='small' variant='warning'>string</Text></Col>
            <Col span={6}><Text type='code' size='small'>{}</Text></Col>
          </Row>
        </Card>
      </Content>
    </Content>
  )
}


// This is to display the sample code
const code =
`
import React from 'react';
import { Tab, TabPanel, Text } from 'ui';

const App: React.FC = () => (
  <Tab>
    <TabPanel label='Tab One'>
      <Text type='title'>Tab One Title</Text>
      <Text type='paragraph'>This is the tab one content.</Text>
    </TabPanel>
    <TabPanel label='Tab Two'>
      <Text type='title'>Tab Two Title</Text>
      <Text type='paragraph'>This is the tab two content.</Text>
    </TabPanel>
    <TabPanel label='Tab Three'>
      <Text type='title'>Tab Three Title</Text>
      <Text type='paragraph'>This is the tab three content.</Text>
    </TabPanel>
  </Tab>
);
`;
