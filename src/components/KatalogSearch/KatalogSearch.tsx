import { useEffect, useState } from "react";
import { katalogSearchFunction } from "../../commons/helpfull-functions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { updateCards, updateKatalogSearchCards } from "../../store/cardSlice";
import { useTranslation } from "react-i18next";
import vector from '../../images/Vector.png';
import city from '../../images/Map_Pin.png';

import './KatalogSearch.scss';

export const KatalogSearch = () => {
    const cards = useSelector((state: RootState) => state.allCards.cards);
    const katalogFilterCards = useSelector((state: RootState) => state.allCards.katalogFilterCards);
    const [specialitySearch, setSpecialitySearch] = useState<string>('');
    const [citySearch, setCitySearch] = useState<string>('');
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const newArrShow = katalogSearchFunction(katalogFilterCards, specialitySearch, citySearch);
        const newArrForFilter = katalogSearchFunction(cards, specialitySearch, citySearch);
        dispatch(updateCards(newArrShow));
        dispatch(updateKatalogSearchCards(newArrForFilter));
        console.log(
            {
                "specialitySearch": specialitySearch,
                "citySearch": citySearch,
            }
        )
    }, [citySearch, specialitySearch]);

    const specialityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpecialitySearch(e.target.value);
    }
    const cityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCitySearch(e.target.value);
    }

    return (
        <div className="katalog-search">
            <div>
                <img className="katalog-search__img1" src={vector} alt="vector" />
                <input placeholder={t("search1")} onChange={e => specialityChange(e)} value={specialitySearch} type="text" />
            </div>
            <div>
                <img className="katalog-search__img2" src={city} alt="city" />
                <input placeholder={t("search2")} onChange={e => cityChange(e)} value={citySearch} type="text" />
            </div>
        </div>
    );
}