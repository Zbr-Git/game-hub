// import useData from './useData';
import genres from '../data/genres';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');  // fetching genres from the server
const useGenres = () => ({ data: genres, isLoading: false, error: null }); //fetching static data locally
export default useGenres;
