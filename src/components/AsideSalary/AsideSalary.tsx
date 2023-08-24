import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Slider from '@mui/material/Slider';
import { Box, FormControlLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import arrowShow from './../../images/Caret_Down.png';
import arrowHide from './../../images/Caret_Down_MD.png'
import { useTranslation } from 'react-i18next';
import { AsideSalaryProps } from '../../commons/types-and-interfaces';
import { valuetext } from '../../commons/helpfull-functions';
import { MAX_VALUE, MIN_DISTANCE, MIN_VALUE } from '../../commons/consts';

import './AsideSalary.scss';

export const AsideSalary: React.FC<AsideSalaryProps> = ({ value1, setValue1, setSalaryRange, salaryRange }) => {
    const [salary, setSalary] = useState<boolean>(true);
    const { t, i18n } = useTranslation();

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - MIN_DISTANCE), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + MIN_DISTANCE)]);
        }
        if (salaryRange !== "other") {
            setSalaryRange("other");
        }
    };

    const handleSalaryChange = (e: any) => {
        const { value, checked } = e.target;
        if (checked) {
            setSalaryRange(value);
        }
    }

    return (
        <>
            <div onClick={() => setSalary(!salary)} className='aside__header'>
                <div>
                    <h3 className='aside__filters-title'>{t("salary")}</h3>
                </div>
                <div>
                    <img src={salary ? arrowHide : arrowShow} alt="arrow" />
                </div>
            </div>

            <div className={salary ? "aside__block hide-block" : "aside__block"}>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <div className='aside-type__salary'>
                        <div>
                            <FormControlLabel value="0,10000" control={<Radio
                                onChange={handleSalaryChange}
                                checked={salaryRange === "0,10000"}
                                sx={{
                                    color: '#1CBBFF',
                                    '&.Mui-checked': {
                                        color: '#1CBBFF',
                                    },
                                }}
                            />} label={t("less") + " 10 000"}
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.60)',
                                    fontWeight: '400',
                                    fontSize: '20px',
                                    fontFamily: 'Source Sans Pro'
                                }}
                            />
                            <FormControlLabel value="10000,15000" control={<Radio
                                onChange={handleSalaryChange}
                                checked={salaryRange === "10000,15000"}
                                sx={{
                                    color: '#1CBBFF',
                                    '&.Mui-checked': {
                                        color: '#1CBBFF',
                                    },
                                }}
                            />} label={"10 000 " + t("to") + " 15 000"}
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.60)',
                                    fontWeight: '400',
                                    fontSize: '20px',
                                    fontFamily: 'Source Sans Pro'
                                }}
                            />
                        </div>
                        <div>
                            <FormControlLabel value="15000,25000" control={<Radio
                                onChange={handleSalaryChange}
                                checked={salaryRange === "15000,25000"}
                                sx={{
                                    color: '#1CBBFF',
                                    '&.Mui-checked': {
                                        color: '#1CBBFF',
                                    },
                                }}
                            />} label={"15 000  " + t("to") + " 25 000"}
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.60)',
                                    fontWeight: '400',
                                    fontSize: '20px',
                                    fontFamily: 'Source Sans Pro'
                                }}
                            />
                            <FormControlLabel value="other" control={<Radio
                                onChange={handleSalaryChange}
                                checked={salaryRange === "other"}
                                sx={{
                                    color: '#1CBBFF',
                                    '&.Mui-checked': {
                                        color: '#1CBBFF',
                                    },
                                }}
                            />} label={t("other")}
                                sx={{
                                    color: 'rgba(0, 0, 0, 0.60)',
                                    fontWeight: '400',
                                    fontSize: '20px',
                                    fontFamily: 'Source Sans Pro'
                                }}
                            />
                        </div>
                    </div>
                </RadioGroup>
                <Box sx={{ width: 300 }}>
                    <Slider
                        getAriaLabel={() => 'Salary range'}
                        value={value1}
                        onChange={handleChange1}
                        min={MIN_VALUE}
                        max={MAX_VALUE}
                        step={1000}
                        valueLabelDisplay="auto"
                        valueLabelFormat={valuetext}
                        getAriaValueText={valuetext}
                        disableSwap
                        sx={{
                            '& .MuiSlider-track': {
                                backgroundColor: '#1CBBFF',
                            },
                            '& .MuiSlider-rail': {
                                backgroundColor: '#E6EAF2',
                            },

                            '& .MuiSlider-thumb': {
                                backgroundColor: 'rgba(255, 0, 0, 0)',
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: '2px solid #D8F1FF',
                            },
                        }}
                    />
                </Box>
                <p className='aside-salary__footer'><span style={{ left: value1[0] / 165 + 'px' }} className='aside-salary__footer__span'>{value1[0]}₴</span>  <span style={{ left: value1[1] / 155 + 'px' }} className='aside-salary__footer__span'>{value1[1]}₴</span></p>
            </div>
        </>
    );
}