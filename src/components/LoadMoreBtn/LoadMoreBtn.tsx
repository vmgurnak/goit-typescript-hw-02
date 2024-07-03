import { FC } from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from '../../types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onSetPage }): JSX.Element => {
  const handleClick = () => {
    onSetPage();
  };

  return (
    <div className={css.LoadMoreBtnWrap}>
      <button className={css.loadMoreBtn} onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
