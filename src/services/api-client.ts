import axios from 'axios';
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: { key: 'da03f76e64c24036930a841fbff027b5' },
});
