import React, { ButtonHTMLAttributes } from 'react';

type Padding = 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50;
type ColWidth = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24;
type GapWidth =  5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100;
type Variant = 'primary' | 'secondary' | 'light' | 'dark' | 'success' | 'warning' | 'danger' | 'info';
type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible';

type InputProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type TextAreaProps = {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

export type FormProps = {
  className?: string;
  onSubmit: (data: { [key: string]: string }) => void;
  inputs: InputProps[];
  textAreas?: TextAreaProps[];
  submitButtonLabel: string;
};

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
};

export type RowProps = {
  children: React.ReactNode;
  className?: string;
  gap?: GapWidth;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

export type ColProps = {
  children: React.ReactNode;
  offset?: ColWidth;
  span?: ColWidth;
  xs?: ColWidth;
  sm?: ColWidth;
  md?: ColWidth;
  lg?: ColWidth;
  xl?: ColWidth;
  oxs?: ColWidth;
  osm?: ColWidth;
  omd?: ColWidth;
  olg?: ColWidth;
  oxl?: ColWidth;
};

export type ContentProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  type?: 'article' | 'section';
  padding?: 'normal' | 'wide' | 'narrow' | 'zero';
};

export type TypographyProps = {
  children: React.ReactNode;
  index?: boolean;
  className?: string;
  href?: string;
  target?: string;
  variant?: Variant;
  transform?: 'capitalize' | 'uppercase' | 'lowercase',
  type?: 'hero' | 'article' | 'section' | 'title' | 'sr-only' | 'paragraph' | 'code' | 'link';
  size?: 'small' | 'medium' | 'large' | 'extra-large' | 'super-large' | 'mega-large';
  weight?: 'normal' | 'bold' | 'bolder' | 'lighter';
  align?: 'center' | 'justify' | 'right' | 'left';
};

export type UtilityProps = {
  children: React.ReactNode;
  className?: string;
  sreenReader?: boolean;
  backgroundColor?: string;
  color?: string;
  padding?: Padding;
  paddingTop?: Padding;
  paddingRight?: Padding;
  paddingBottom?: Padding;
  paddingLeft?: Padding;
  margin?: Padding;
  marginTop?: Padding;
  marginRight?: Padding;
  marginBottom?: Padding;
  marginLeft?: Padding;
  hiddenMin?: BreakPoint;
  hiddenMax?: BreakPoint;
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
  width?: 25 | 50 | 75 | 100;
  height?: 25 | 50 | 75 | 100;
  display?: 'block' | 'inline-block' | 'inline';
};

export type BrandingProps = {
  className?: string;
  index?: boolean;
  title?: any;
};

export type CarouselProps = {
  className?: string;
  images: string[];
  autoplay?: boolean;
  interval?: number;
};

export type TabProps = {
  children: React.ReactNode;
  className?: string;
};

export type TabPanelProps = {
  children?: React.ReactNode;
  label?: string;
}

export type CodeProps = {
  children?: React.ReactNode;
  className?: string;
  language?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  display?: 'inline-block' | 'block';
  size?: 'small' | 'medium' | 'large';
}

export type SearchProps = {
  onSearch: (value: string) => void;
  className?: string;
  placeholder?: string;
};

export type CardProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
}

export type PaperProps = {
  children: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
  sticky?: boolean;
}
