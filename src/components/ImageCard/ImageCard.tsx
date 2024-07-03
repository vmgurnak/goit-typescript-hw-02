import { FC } from 'react';
import css from './ImageCard.module.css';
import { ImageCardProps } from '../../types';

const ImageCard: FC<ImageCardProps> = ({
  small,
  regular,
  alt,
  openModal,
  modalData,
}): JSX.Element => {
  const handleClick = (): void => {
    openModal();
    modalData(regular, alt);
  };
  return (
    <div className={css.ImageCardWrap}>
      <img
        onClick={handleClick}
        className={css.ImageCardImg}
        src={small}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
