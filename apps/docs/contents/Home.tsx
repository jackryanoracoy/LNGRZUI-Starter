import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PagesDataType } from 'types/PageDataType';
import { useTranslation } from 'next-i18next';
import { Container, Content, Row, Col, Paper, Card, Search, Code, Text, List, Utility } from 'ui';

type Props = {
  pagesData: PagesDataType[];
}

export default function ContentStart({ pagesData }: Props) {
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

  const featureItems = [
    { id: 1, text: t('content.feature-one') },
    { id: 2, text: t('content.feature-two') },
    { id: 3, text: t('content.feature-three') },
    { id: 4, text: t('content.feature-four') },
    { id: 5, text: t('content.feature-five') },
  ];

  const technologyItems = [
    { id: 1, link: <Link href={t('content.technology-link-one')} target='_blank'>{t('content.technology-one')}</Link> },
    { id: 2, link: <Link href={t('content.technology-link-two')} target='_blank'>{t('content.technology-two')}</Link> },
    { id: 3, link: <Link href={t('content.technology-link-three')} target='_blank'>{t('content.technology-three')}</Link> },
    { id: 4, link: <Link href={t('content.technology-link-four')} target='_blank'>{t('content.technology-four')}</Link> },
  ];

  const usefulLinkItems = [
    { id: 1, link: <Link href={t('content.useful-link-link-one')} target='_blank'>{t('content.useful-link-one')}</Link> },
    { id: 2, link: <Link href={t('content.useful-link-link-two')} target='_blank'>{t('content.useful-link-two')}</Link> },
    { id: 3, link: <Link href={t('content.useful-link-link-three')} target='_blank'>{t('content.useful-link-three')}</Link> },
    { id: 4, link: <Link href={t('content.useful-link-link-four')} target='_blank'>{t('content.useful-link-four')}</Link> },
    { id: 5, link: <Link href={t('content.useful-link-link-five')} target='_blank'>{t('content.useful-link-five')}</Link> },
    { id: 6, link: <Link href={t('content.useful-link-link-six')} target='_blank'>{t('content.useful-link-six')}</Link> },
  ];

  useEffect(() => handleSearch(''), []);
  return (
    <Container>
      <Content type='section' title={t('content.intro-title')}>
        <Utility paddingBottom={20}>
          <Text type='paragraph'>{t('content.intro-desc')}</Text>
        </Utility>
        <Paper>
          <Row gap={10} align='stretch'>
            <Col xs={24} lg={14}>
              <Card header={t('content.feature-title')}>
                <List type='decimal' items={featureItems} />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={4}>
              <Card header={t('content.technology-title')}>
                <List type='disc' items={technologyItems} />
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <Card header={t('content.useful-link-title')}>
                <List type='disc' items={usefulLinkItems} />
              </Card>
            </Col>
          </Row>
        </Paper>
      </Content>

      <Content type='section' title={t('content.setup-title')}>
        <Utility paddingBottom={20}>
          <Text type='paragraph'>{t('content.setup-desc')}</Text>
        </Utility>
        <Paper
          sticky
          header={<Text type='title'>{t('content.guide-title')}</Text>}
        >
          <Utility paddingBottom={20}>
            <Text type='paragraph'>{t('content.clone-desc')}</Text><br />
            <Code language='html'>{t('content.clone-code').trim()}</Code>
          </Utility>
          <Utility paddingBottom={20}>
            <Text type='paragraph'>{t('content.install-desc')}</Text><br />
            <Code language='html'>{t('content.install-code').trim()}</Code>
          </Utility>
          <Utility paddingBottom={20}>
            <Text type='paragraph'>{t('content.run-desc')}</Text><br />
            <Code language='html'>{t('content.run-code').trim()}</Code>
          </Utility>
          <Utility paddingBottom={20}>
            <Text type='paragraph'>{t('content.docs-desc')}</Text><br />
            <Code language='html'>{t('content.docs-code').trim()}</Code>
          </Utility>
          <Utility paddingBottom={20}>
            <Text type='paragraph'>{t('content.front-desc')}</Text><br />
            <Code language='html'>{t('content.front-code').trim()}</Code>
          </Utility>
          <Utility paddingBottom={20}>
            <Text type='paragraph'><span dangerouslySetInnerHTML={{__html: t('content.open-desc')}} /></Text><br />
            <Code language='html'>{t('content.browser-code').trim()}</Code>
          </Utility>
        </Paper>
      </Content>

      <Content type='section' title={t('content.component-title')}>
        <Utility paddingBottom={20}>
          <Text type='paragraph'>{t('content.component-desc')}</Text>
        </Utility>
        <Paper
          sticky
          header={<Search onSearch={handleSearch} placeholder={t('content.search-placeholder')} />}
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
