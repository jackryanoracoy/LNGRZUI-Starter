import React from 'react';

type contentProps = {
  title: string;
  content: string;
}

export interface CommonProps {
  children?: React.ReactNode;
}

export interface MetaDataProps {
  title?: string;
  description?: string;
  keywords?: string;
  themecolor?: string;
}

export interface PagesDataProps {
  pagesData: {
    id: number;
    slug: string;
    en: contentProps;
    ja: contentProps;
  }[]
}
