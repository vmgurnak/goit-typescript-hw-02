// function request from api https://api.unsplash.com

import axios from 'axios';

const requestImageByQuery = async <T>(
  query: string,
  currentPage: number,
  perPage: number
): Promise<T> => {
  const API_KEY = 'wA65yMsuVtaGEz26VTfXV2EuMFpmBDIORhh0BZRN2ls';
  const BASE_URL = 'https://api.unsplash.com/search/photos';
  const config = {
    params: {
      client_id: API_KEY,
      query,
      page: currentPage,
      per_page: perPage,
    },
  };

  const { data }: { data: T } = await axios.get(`${BASE_URL}`, config);
  return data;
};

export { requestImageByQuery };
