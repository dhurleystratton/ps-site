import { NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';

export const titleFont = localFont({
  src: '../../public/fonts/title.woff2',
  variable: '--font-title',
  display: 'swap',
});

export const contentFont = localFont({
  src: '../../public/fonts/content.woff2',
  variable: '--font-content',
  display: 'swap',
});

export const createTitleClassName = () => {
  return `${titleFont.className} font-title`;
};

export const createContentClassName = () => {
  return `${contentFont.className} font-content`;
};
