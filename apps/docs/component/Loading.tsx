import { useTranslation } from 'next-i18next';
import { Text } from 'ui';

export default function Loading() {
  const { t } = useTranslation();
  return <Text type='paragraph' align='center'>{t('loading')}</Text>
}
