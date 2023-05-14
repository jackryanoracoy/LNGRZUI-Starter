import { useTranslation } from 'next-i18next';
import { Utility, Text } from 'ui';

export default function Loading() {
  const { t } = useTranslation();
  return <Utility margin={20}><Text type='paragraph' align='center'>{t('loading')}</Text></Utility>
}
