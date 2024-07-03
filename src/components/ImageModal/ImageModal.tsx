import { FC } from 'react';

// import library React Modal
import Modal from 'react-modal';

import css from './ImageModal.module.css';
import { ImageModalProps } from '../../types';

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  modalImg,
  alt,
}): JSX.Element => {
  const customStyles = {
    overlay: {
      zIndex: '1',
      backgroundColor: 'rgba(46, 47, 66, 0.76)',
    },
    content: {
      background: 'none',
      inset: '20px 40px',
      border: 'none',
      outline: '10px',
      padding: '0',
    },
  };

  return (
    <div>
      <Modal
        className={css.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img className={css.modalImg} src={modalImg} alt={alt} />
      </Modal>
    </div>
  );
};

export default ImageModal;
