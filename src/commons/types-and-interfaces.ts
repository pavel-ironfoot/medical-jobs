export interface AsideSalaryProps {
    value1: number[];
    setValue1: (value: number[]) => void;
    setSalaryRange: (value: string) => void;
    salaryRange: string;
}

export interface AsideSeleryRadioProps{
    handleSalaryChange:any;
    salaryRange: string;
    salaryRangeValue:string;
    labelValue:string;
}

export interface AsideSalarySliderProps {
    value1:number[];
    handleChange1:any;
}

export interface AsideTypeProps {
    checkboxType: string[];
    setCheckboxType: any;
}

export interface OneCardProps {
    id:number;
    company: string;
    title: string;
    image: string;
    text: string;
    city: string;
    timeLeft: string;
}

export interface ModalTypes {
    active: boolean;
    setActive: (value: boolean) => void;
}

export interface AsideTypeCheckboxProps{
    checkboxType: string[];
    handleTypeChange: any;
    asideTypeValue:string;
}