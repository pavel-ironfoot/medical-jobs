import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { AsideTypeCheckboxProps } from '../../../commons/types-and-interfaces';


export const AsideTypeCheckbox: React.FC<AsideTypeCheckboxProps> = ({ handleTypeChange, checkboxType, asideTypeValue }) => {
    const { t, i18n } = useTranslation();
    console.log(asideTypeValue)
    return (
        <>
            <FormControlLabel control={<Checkbox
                value={asideTypeValue}
                onChange={handleTypeChange}
                checked={checkboxType.includes(asideTypeValue)}
                sx={{
                    color: '#1CBBFF',
                    '&.Mui-checked': {
                        color: '#1CBBFF',
                    },
                }}
            />} label={t(asideTypeValue)}
                sx={{
                    color: 'rgba(0, 0, 0, 0.60)',
                    fontWeight: '400',
                    fontSize: '20px',
                    fontFamily: 'Source Sans Pro'
                }}
            />
        </>
    );
}