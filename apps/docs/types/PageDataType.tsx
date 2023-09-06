type ContentType = {
  title: string;
  content: string;
}

export interface PagesDataType {
  id: number;
  slug: string;
  en: ContentType;
  ja: ContentType;
}
