import { MAX_VALUE, MIN_VALUE } from "../../../commons/consts"
import { valuetext } from "../../../commons/helpfull-functions";
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';
import { AsideSalarySliderProps } from "../../../commons/types-and-interfaces";

export const AsideSalarySlider: React.FC<AsideSalarySliderProps> = ({ value1, handleChange1 }) => {
    return (
        <>
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
        </>
    );
}