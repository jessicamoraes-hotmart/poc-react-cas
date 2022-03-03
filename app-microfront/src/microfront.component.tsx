import React from 'react';
import { useTranslation } from 'react-i18next';

function Microfront() {
  const { t } = useTranslation();
  return <div>Microfront {t('withTranslation')}</div>;
}

export default Microfront;
