import { useState } from 'react';
import arrowShow from './../../images/Caret_Down.png';
import arrowHide from './../../images/Caret_Down_MD.png'
import { useTranslation } from 'react-i18next';
import { AsideTypeProps } from '../../commons/types-and-interfaces';

import './AsideType.scss';
import { AsideTypeCheckbox } from './AsideTypeCheckbox';

export const AsideType: React.FC<AsideTypeProps> = ({ setCheckboxType, checkboxType }) => {
    const [type, setType] = useState<boolean>(true);
    const { t, i18n } = useTranslation();

    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckboxType((prev: string[]) => [...prev, value])
        } else {
            setCheckboxType((prev: string[]) => [...prev.filter(elem => elem !== value)])
        }
    }

    return (
        <>
            <div onClick={() => setType(!type)} className='aside__header'>
                <div>
                    <h3 className='aside__filters-title'>{t("type")}</h3>
                </div>
                <div>
                    <img src={type ? arrowHide : arrowShow} alt="arrow" />
                </div>
            </div>
            <div className={type ? "aside__block hide-block" : "aside__block"}>
                <div className='aside-type__checkboxes'>
                    <div>
                        <AsideTypeCheckbox handleTypeChange={handleTypeChange} checkboxType={checkboxType} asideTypeValue={"Internship"} />
                        <AsideTypeCheckbox handleTypeChange={handleTypeChange} checkboxType={checkboxType} asideTypeValue={"FullDay"} />
                    </div>
                    <div>
                        <AsideTypeCheckbox handleTypeChange={handleTypeChange} checkboxType={checkboxType} asideTypeValue={"Volunteering"} />
                        <AsideTypeCheckbox handleTypeChange={handleTypeChange} checkboxType={checkboxType} asideTypeValue={"PartTime"} />
                    </div>
                </div>
            </div>
        </>
    );
}