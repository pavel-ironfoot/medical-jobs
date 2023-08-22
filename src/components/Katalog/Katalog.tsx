import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { OneCard } from '../OneCard';
import { KatalogSearch } from '../KatalogSearch';
import Pagination from '@mui/material/Pagination';
import { useTranslation } from 'react-i18next';
import arrow from '../../images/Arrows.png';

import './Katalog.scss';

export const Katalog = () => {
  const cards = useSelector((state: RootState) => state.allCards.searchCards);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setCurrentPage(1);
  }, [cards.length]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const showCards = cards.slice(startIndex, endIndex).map((elem) => (
    <OneCard
      id={elem.id}
      key={elem.id}
      timeLeft={elem.timeLeft}
      title={elem.title}
      text={elem.text}
      image={elem.image}
      company={elem.company}
      city={elem.city}
    />
  ));

  const handleShowMore = () => {
    setItemsPerPage(prev => prev + 5);
    console.log(itemsPerPage)
  }

  const handleChangePage = (event: any, value: any) => {
    setCurrentPage(value);
  };

  return (
    <div className='katalog'>
      <KatalogSearch />
      <p className='katalog-counter'>{cards.length}  {t("offers1")}</p>
      {showCards}

      <div>
        <button className='katalog__show-more' onClick={handleShowMore}>
          <div>
            <img src={arrow} alt="arrow" />
            {t("showMore")}
          </div>
        </button>
      </div>

      <Pagination
        count={totalPages}
        variant='outlined'
        shape='rounded'
        // boundaryCount={1}
        // siblingCount={0}
        onChange={handleChangePage}
        hidePrevButton
        hideNextButton
        page={currentPage}
        size="large"
      />
    </div>
  );
};
