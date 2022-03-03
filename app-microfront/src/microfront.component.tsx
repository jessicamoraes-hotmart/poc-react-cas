import React from 'react';
import { useTranslation } from 'react-i18next';

function Microfront({ name }) {
  const { t } = useTranslation();
  return (
    <section>
      <h3>{t('welcome')} - {name}</h3>
      <article>
        <p>Microfront {t('withTranslation')}</p>
      </article>
    </section>
  );
}

export default Microfront;
