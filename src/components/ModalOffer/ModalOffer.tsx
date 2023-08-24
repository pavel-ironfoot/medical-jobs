import { useTranslation } from 'react-i18next';
import { ModalTypes } from '../../commons/types-and-interfaces';

import './ModalOffer.scss';

export const ModalOffer: React.FC<ModalTypes> = ({ active, setActive }) => {
    const { t, i18n } = useTranslation();

    return (
        <div onClick={() => setActive(false)} className={active ? 'offer-modal offer-modal__active' : 'offer-modal'}>
            <div onClick={(e) => e.stopPropagation()} className='offer-modal__content'>
                <p>{t("successfully")}</p>
            </div>
        </div>
    );
}