import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { allData } from '../../commons/data';
import { useTranslation } from 'react-i18next';

import './OneOfferPage.scss';

export const OneOfferPage = () => {
    const { id } = useParams<{ id: string }>();
    const [oneOffer, setOneOffer] = useState<any | boolean>(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const currenOffer: any | boolean = id ? allData[+id] : false;
        setOneOffer(currenOffer);
    }, [id]);

    return (
        <div className="one-offer-page">
            {oneOffer ? <>
                <h1>{oneOffer.title}</h1>
                <h3>{oneOffer.company}</h3>
            </> : <>
                {t("informationone")}
            </>}
        </div>
    );
}