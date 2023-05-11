import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container, Row, Col, Content, Code, Paper, Card, Text, Search, Utility } from 'ui';
import { PagesDataProps } from './ComponentTypes';

export default function SectionSearch({ pagesData }: PagesDataProps) {
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
    <Container>
      <Content type='section' title={t('search.title')}>
        <Text type='paragraph'>{t('search.desc')}</Text>

        <Content type='article' title={t('search.example-title')}>
          <Paper
            sticky
            header={ <Search onSearch={handleSearch} placeholder={t('search.search-placeholder')} /> }
          >

            {searchResults.length > 0 ? (
              <Row gap={10} align='stretch'>
                {searchResults.map((result) => (
                  <Col sm={12} md={8} lg={6} key={result.id}>
                    <Card>
                      <Text type='title'><Link href={result.slug}>{result[language].title}</Link></Text>
                      <Text type='paragraph' size='medium'>{result[language].content}</Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <Card><Text type='paragraph' align='center'>{t('search.no-data')}</Text></Card>
            )}
          </Paper>
        </Content>

        <Content type='article' title={t('search.code-title')}>
          <Code>{t('search.sample-code').trim()}</Code>
        </Content>

        <Content type='article' title={t('search.props-title')}>
          <Card>
            <Utility hiddenMax='md' marginBottom={10}>
              <Row align='center'>
                <Col xs={24} md={4}><Text type='paragraph' weight='bold'>{t('search.props-title-properties')}</Text></Col>
                <Col xs={24} md={14}><Text type='paragraph' weight='bold'>{t('search.props-title-type')}</Text></Col>
                <Col xs={24} md={6}><Text type='paragraph' weight='bold'>{t('search.props-title-default')}</Text></Col>
              </Row>
            </Utility>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('search.props-desc-properties-one')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='warning'>{t('search.props-desc-type-one')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('search.props-desc-default-one')}</Text></Col>
            </Row>
            <Row align='center'>
              <Col xs={24} md={4}><Text type='paragraph' size='small' weight='bold'>{t('search.props-desc-properties-two')}</Text></Col>
              <Col xs={24} md={14}><Text type='code' size='small' variant='secondary'>{t('search.props-desc-type-two')}</Text></Col>
              <Col xs={24} md={6}><Text type='paragraph' size='small'>{t('search.props-desc-default-two')}</Text></Col>
            </Row>
          </Card>
        </Content>
      </Content>
    </Container>
  )
}
