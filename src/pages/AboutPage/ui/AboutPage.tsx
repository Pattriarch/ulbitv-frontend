import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = (): JSX.Element => {
    const { t } = useTranslation('about')

    return (
        <div>
            {t('О сайте')}
        </div>
    )
}

export default AboutPage
