export const filterCards = (cards: any[], salaryRange: string, value1: any, checkboxType: string[]) => {
    if (salaryRange === '' && checkboxType.length === 0) {
        return cards;
    }

    if (salaryRange === '') {
        const newArr = cards.filter(element => {
            let newValue;
            checkboxType.forEach(el => {
                if (element.type === el) newValue = element;
            })
            return newValue;
        })
        return newArr;
    }

    if (salaryRange === 'other') {
        if (checkboxType.length > 0) {
            const newArr = cards.filter(elem => {
                if (+elem.salary >= +value1[0] && +elem.salary <= +value1[1]) return elem;
            }).filter(element => {
                let newValue;
                checkboxType.forEach(el => {
                    if (element.type === el) newValue = element;
                })
                return newValue;
            })
            return newArr;
        } else {
            const newArr = cards.filter(elem => {
                if (+elem.salary >= +value1[0] && +elem.salary <= +value1[1]) return elem;
            });
            return newArr;
        }


    } else {
        if (checkboxType.length > 0) {
            const newArr = cards.filter(elem => {
                if (+elem.salary >= +salaryRange.split(',')[0] && +elem.salary <= +salaryRange.split(',')[1]) return elem;
            }).filter(element => {
                let newValue;
                checkboxType.forEach(el => {
                    if (element.type === el) newValue = element;
                })
                return newValue;
            })
            return newArr;
        } else {
            const newArr = cards.filter(elem => {
                if (+elem.salary >= +salaryRange.split(',')[0] && +elem.salary <= +salaryRange.split(',')[1]) return elem;
            })
            return newArr;
        }
    }
}

export const katalogSearchFunction = (cards: any[], speciality: string, city: string) => {
    if (city === '') {
        const newArr = cards.filter(elem => {
            if (elem.title.toUpperCase().includes(speciality.toUpperCase())) return elem;
        })
        return newArr;
    } else {
        const newArr = cards.filter(elem => {
            if (elem.title.toUpperCase().includes(speciality.toUpperCase()) && elem.city.toUpperCase().includes(city.toUpperCase())) return elem;
        })
        return newArr;
    }
}

export const valuetext = (value: number) => {
    return `${value}₴`;
}
