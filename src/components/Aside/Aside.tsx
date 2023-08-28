import { useEffect, useState } from 'react';
import arrowShow from './../../images/Caret_Down.png';
import arrowHide from './../../images/Caret_Down_MD.png'
import { useDispatch, useSelector } from 'react-redux';
import { updateCards, updateKatalogFilterCards } from '../../store/cardSlice';
import { RootState } from '../../store';
import { filterCards } from '../../commons/helpfull-functions';
import { AsideType } from '../AsideType';
import { AsideSalary } from '../AsideSalary';
import { useTranslation } from 'react-i18next';
import { DEFAULT_VALUE1 } from '../../commons/consts';

import './Aside.scss';

export const Aside = () => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const cards = useSelector((state: RootState) => state.allCards.cards);
    const katalogSearchCards = useSelector((state: RootState) => state.allCards.katalogSearchCards);
    const [speciality, setSpeciality] = useState<boolean>(true);

    const [checkboxType, setCheckboxType] = useState<string[]>([]);
    const [salaryRange, setSalaryRange] = useState<string>('');
    const [value1, setValue1] = useState<number[]>(DEFAULT_VALUE1);

    useEffect(() => {
        if (salaryRange !== '' && salaryRange !== 'other') {
            setValue1([+salaryRange.split(',')[0], +salaryRange.split(',')[1]]);
        }
    }, [salaryRange]);

    const changeShowCards = () => {
        const newCardsShow = filterCards(katalogSearchCards, salaryRange, value1, checkboxType);
        const newCardsForSearch = filterCards(cards, salaryRange, value1, checkboxType);
        dispatch(updateCards(newCardsShow));
        dispatch(updateKatalogFilterCards(newCardsForSearch));
    }

    useEffect(() => {
        if (salaryRange === 'other') {
            console.log(
                {
                    'checkboxType': checkboxType,
                    'salaryRange': value1,
                }
            )
        } else {
            console.log(
                {
                    'checkboxType': checkboxType,
                    'salaryRange': salaryRange,
                }
            )
        }
        changeShowCards();
    }, [checkboxType, salaryRange, value1]);

    const handleClear = () => {
        setCheckboxType([]);
        setSalaryRange('');

        setValue1(DEFAULT_VALUE1);
    }

    return (
        <aside className='aside'>
            <div className='aside__header'>
                <div>
                    <h1 className='aside__filters-title'>{t("filters")}</h1>
                </div>
                <div>
                    <button onClick={handleClear} className="clear__button">
                        <span className="clear__button-border__top clear__button-border"></span>
                        <span className="clear__button-border__right clear__button-border"></span>
                        <span className="clear__button-border__bottom clear__button-border"></span>
                        <span className="clear__button-border__left clear__button-border"></span>
                        {t("clear")}
                    </button>
                </div>
            </div>
            <hr className='aside-hr' />
            <AsideType setCheckboxType={setCheckboxType} checkboxType={checkboxType} />
            <AsideSalary value1={value1} setValue1={setValue1} setSalaryRange={setSalaryRange} salaryRange={salaryRange} />
            <div onClick={() => setSpeciality(!speciality)} className='aside__header'>
                <div>
                    <h3 className='aside__filters-title'>{t("speciality")}</h3>
                </div>
                <div>
                    <img src={speciality ? arrowHide : arrowShow} alt="arrow" />
                </div>
            </div>

            <div className={speciality ? "aside__block hide-block" : "aside__block"}>

            </div>
        </aside>
    );
}