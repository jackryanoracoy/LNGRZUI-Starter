import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Code, Paper, Card, Text, Search, Utility } from 'ui';
import { PagesDataProps } from './ContentTypes';

export default function ContentSearch({ pagesData }: PagesDataProps) {
  const { t, i18n } = useTranslation('search');
  const [searchResults, setSearchResults] = useState([]);
  const language = i18n.language;
  const handleSearch = (searchTerm: string) => {
    const results = searchPages(searchTerm);
    setSearchResults(results);
  };

  const searchPages = (term: string) => {
    const results = pagesData.filter((page) => {
      const { title, content } = page[language];
      const lowerCaseTerm = term.toLocaleLowerCase([language]);
      return title.toLocaleLowerCase([language]).includes(lowerCaseTerm) || content.toLocaleLowerCase([language]).includes(lowerCaseTerm);
    });
    return results;
  };

  useEffect(() => handleSearch(''), []);

  return (
    <>
      <Utility backgroundColor='grey-100'>
        <Container>
          <Content type='section'>
            <Text type='hero' variant='primary' transform='uppercase'>{t('title')}</Text>
            <Text type='paragraph'>{t('description')}</Text>
          </Content>
        </Container>
      </Utility>
      <Container>
        <Content type='section' title={t('content.overview-title')}>
          <Text type='paragraph'>{t('content.overview-desc')}</Text>

          <Content type='article' title={t('content.example-title')}>
            <Paper
              sticky
              header={ <Search onSearch={handleSearch} placeholder={t('content.title-one')} /> }
            >
              {searchResults.length > 0 ? (
                <Row gap={10} align='stretch'>
                  {searchResults.map((result) => (
                    <Col sm={12} md={8} lg={6} key={result.id}>
                      <Card header={<Text type='title'><Link href={result.slug}>{result[language].title}</Link></Text>}>
                        <Text type='paragraph' size='medium'>{result[language].content}</Text>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <Text type='paragraph' align='center'>{t('content.no-data')}</Text>
              )}
            </Paper>
          </Content>
        </Content>
      </Container>
      <Container>
        <Content type='section' title={t('content.how-to-title')}>
          <Text type='paragraph'>{t('content.how-to-desc')}</Text>

          <Content type='article' title={t('content.code-title')}>
            <Code>{t('content.sample-code').trim()}</Code>
          </Content>

          <Content type='article' title={t('content.props-title')}>
            <Paper
              header={
                <>
                  <Utility hiddenMin='md'>
                    <Text size='small' type='paragraph' weight='bold'>{t('content.props-title-properties')}, {t('content.props-title-type')}, {t('content.props-title-default')}</Text>
                  </Utility>
                  <Utility hiddenMax='md'>
                    <Row align='center'>
                      <Col xs={24} md={4}><Text type='title'>{t('content.props-title-properties')}</Text></Col>
                      <Col xs={24} md={14}><Text type='title'>{t('content.props-title-type')}</Text></Col>
                      <Col xs={24} md={6}><Text type='title'>{t('content.props-title-default')}</Text></Col>
                    </Row>
                  </Utility>
                </>
              }
            >
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-one')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('content.props-desc-type-one')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-one')}</Text></Col>
              </Row>
              <hr />
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-two')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-two')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-two')}</Text></Col>
              </Row>

              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('content.props-desc-properties-three')}</Text></Col>
                <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('content.props-desc-type-three')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('content.props-desc-default-three')}</Text></Col>
              </Row>
            </Paper>
          </Content>
        </Content>
      </Container>
    </>
  )
}
