import { useTranslation } from 'next-i18next';
import { Paper, Text } from 'ui';

export default function Loading() {
  const { t } = useTranslation();
  return <Paper><Text type='paragraph' align='center'>{t('loading')}</Text></Paper>
}
