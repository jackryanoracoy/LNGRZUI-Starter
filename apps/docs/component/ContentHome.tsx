import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container, Content, Row, Col, Paper, Card, Search, Text } from 'ui';

export default function ContentStart({ pagesData }) {
  const { t, i18n } = useTranslation('home');
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
      <Content type='section' title={t('content.docs-title')}>
        <Paper
          sticky
          header={ <Search onSearch={handleSearch} placeholder={t('content.search-placeholder')} /> }
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
    </Container>
  )
}
