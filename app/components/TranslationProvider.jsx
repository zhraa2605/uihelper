'use client';

import { appWithTranslation } from 'next-i18next';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n'; // initialize your i18n instance here

export default function TranslationProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
