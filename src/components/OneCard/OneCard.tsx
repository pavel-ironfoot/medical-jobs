import { useTranslation } from 'react-i18next';
import cityImg from '../../images/Map_Pin.png'
import { OneCardProps } from '../../commons/types-and-interfaces';
import { MAX_CHARACTERS } from '../../commons/consts';
import { NavLink } from 'react-router-dom';

import './OneCard.scss';

export const OneCard: React.FC<OneCardProps> = ({id, timeLeft, company, title, text, image, city }) => {
    const { t, i18n } = useTranslation();
    const shortenedText = text.length > MAX_CHARACTERS ? `${text.slice(0, MAX_CHARACTERS)}...` : text;

    return (
        <div className='one-card'>
            <header className='one-card__header'>
                <div className='one-card__header-first'>
                    <div>
                        <img className='one-card__header-first__image' src={require(`./images/${image}.png`)} alt="clinic logo" />
                    </div>
                    <div>
                        <h2>{title}</h2>
                        <h4>{company}</h4>
                    </div>
                </div>

                <div>
                    <div className='one-card__header__map-img-span'>
                        <img className='one-card__header__map-img' src={cityImg} alt="map search" />
                        <span className='one-card__header__span'>{city}</span>
                    </div>

                    <p className='one-card__header__time-left'>{timeLeft} {t("timeLeft")}</p>
                </div>
            </header>

            <footer className='one-card__footer'>
                <p>{shortenedText}</p>
                <div>
                    <NavLink to={`/oneoffer/${id}`}>
                        <button className='one-card__footer__custom-button'>{t("more")}</button>
                    </NavLink>
                </div>
            </footer>
        </div>
    );
}
