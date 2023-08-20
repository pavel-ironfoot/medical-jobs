import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { useState } from 'react';
import arrowShow from './../../images/Caret_Down.png';
import arrowHide from './../../images/Caret_Down_MD.png'
import { useTranslation } from 'react-i18next';
import { AsideTypeProps } from '../../commons/types-and-interfaces';

import './AsideType.scss';

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
                        <FormControlLabel control={<Checkbox
                            value={"Інтернатура"}
                            onChange={handleTypeChange}
                            checked={checkboxType.includes("Інтернатура")}
                            sx={{
                                color: '#1CBBFF',
                                '&.Mui-checked': {
                                    color: '#1CBBFF',
                                },
                            }}
                        />} label={t("internship")}
                            sx={{
                                color: 'rgba(0, 0, 0, 0.60)',
                                fontWeight: '400',
                                fontSize: '20px',
                                fontFamily: 'Source Sans Pro'
                            }}
                        />
                        <FormControlLabel control={<Checkbox
                            value={"Повний день"}
                            onChange={handleTypeChange}
                            checked={checkboxType.includes("Повний день")}
                            sx={{
                                color: '#1CBBFF',
                                '&.Mui-checked': {
                                    color: '#1CBBFF',
                                },
                            }}
                        />} label={t("fullDay")}
                            sx={{
                                color: 'rgba(0, 0, 0, 0.60)',
                                fontWeight: '400',
                                fontSize: '20px',
                                fontFamily: 'Source Sans Pro'
                            }}
                        />
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox
                            value={"Волонтерство"}
                            onChange={handleTypeChange}
                            checked={checkboxType.includes("Волонтерство")}
                            sx={{
                                color: '#1CBBFF',
                                '&.Mui-checked': {
                                    color: '#1CBBFF',
                                },
                            }}
                        />} label={t("volunteering")}
                            sx={{
                                color: 'rgba(0, 0, 0, 0.60)',
                                fontWeight: '400',
                                fontSize: '20px',
                                fontFamily: 'Source Sans Pro'
                            }}
                        />
                        <FormControlLabel control={<Checkbox
                            onChange={handleTypeChange}
                            checked={checkboxType.includes("Неповний день")}
                            value={"Неповний день"}
                            sx={{
                                color: '#1CBBFF',
                                '&.Mui-checked': {
                                    color: '#1CBBFF',
                                },
                            }}
                        />} label={t("partTime")}
                            sx={{
                                color: 'rgba(0, 0, 0, 0.60)',
                                fontWeight: '400',
                                fontSize: '20px',
                                fontFamily: 'Source Sans Pro'
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}