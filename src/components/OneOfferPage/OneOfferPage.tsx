import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { allData } from '../../commons/data';
import { useTranslation } from 'react-i18next';
import offerImage from '../../images/one-offer.png';

import './OneOfferPage.scss';
import { OfferForm } from '../OfferForm';

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
                <header className='one-offer-page__header'>
                    <div>
                        <img src={offerImage} alt="offer-image" />
                    </div>
                    <div>

                    </div>
                </header>
                <main className='one-offer-page__main'>
                    <div>
                        <h1>{oneOffer.title}</h1>
                        <h3>{oneOffer.company}</h3>
                    </div>
                    <div>
                        <p>{oneOffer.type}</p>
                        <p>{oneOffer.salary} ₴</p>
                    </div>
                </main>
                <footer className="one-offer-page__footer">
                    <p>{oneOffer.text}</p>
                    <OfferForm />
                </footer>
            </> : <div className='one-offer-page__no-information'>
                {t("informationone")}
            </div>}
        </div>
    );
}