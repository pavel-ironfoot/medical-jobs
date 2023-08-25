import { FormControlLabel } from '@mui/material';
import Radio from '@mui/material/Radio';
import { useTranslation } from 'react-i18next';
import { AsideSeleryRadioProps } from '../../../commons/types-and-interfaces';


export const AsideSeleryRadio:React.FC<AsideSeleryRadioProps> = ({salaryRange,handleSalaryChange,salaryRangeValue, labelValue}) => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <FormControlLabel value={salaryRangeValue} control={<Radio
                onChange={handleSalaryChange}
                checked={salaryRange === salaryRangeValue}
                sx={{
                    color: '#1CBBFF',
                    '&.Mui-checked': {
                        color: '#1CBBFF',
                    },
                }}
            />} label={labelValue}
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