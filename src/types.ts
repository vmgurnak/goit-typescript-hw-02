export interface ImagesArray {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface ImageGalleryProps {
  images: ImagesArray[] | [];
  openModal: () => void;
  modalData: (img: string, alt: string) => void;
}

export interface ImageCardProps {
  small: string;
  regular: string;
  alt: string;
  openModal: () => void;
  modalData: (img: string, alt: string) => void;
}

export interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  modalImg: string;
  alt: string;
}

export interface LoadMoreBtnProps {
  onSetPage: () => void;
}

export interface SearchBarProps {
  onSetSearchQuery: (query: string) => void;
}

export interface dataByQuery {
  results: ImagesArray[];
  total_pages: number;
}
