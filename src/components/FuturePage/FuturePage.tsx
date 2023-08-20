import { useTranslation } from 'react-i18next';

import './FuturePage.scss';

export const FuturePage = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='future-page'>
            <div>
                <h1>{t("futureText")}</h1>
            </div>
        </div>
    );
}