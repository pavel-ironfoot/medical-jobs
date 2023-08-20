export interface AsideSalaryProps {
    value1: number[];
    setValue1: (value: number[]) => void;
    setSalaryRange: (value: string) => void;
    salaryRange: string;
}

export interface AsideTypeProps {
    checkboxType: string[];
    setCheckboxType: any;
}

export interface OneCardProps {
    company: string;
    title: string;
    image: string;
    text: string;
    city: string;
    timeLeft: string;
}