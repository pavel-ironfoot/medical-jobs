import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

import './LanguageChange.scss';

export const LanguageChange = () => {
  const [selectedOption, setSelectedOption] = useState<string>(() => {
    const storedOption = localStorage.getItem('jobsLanguage');
    return storedOption || 'en';
  });

  const { t, i18n } = useTranslation();

  const handleOptionChange = (newOption: string) => {
    setSelectedOption(newOption);
    i18n.changeLanguage(newOption);
    localStorage.setItem('jobsLanguage', newOption);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedOption);
  }, [selectedOption, i18n]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedOption === 'en' ? 'EN' : 'UA'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleOptionChange('en')} >{t("language1")}: EN</Dropdown.Item>
        <Dropdown.Item onClick={() => handleOptionChange('ua')}>{t("language1")}: UA</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
