import {api} from './index';

export default function search({keyword}) {
  return api.get(
    `/search/movie?api_key=9b37d0d22fee2b3880cbd61e9c9e2b0f&language=en-US&query=${keyword}&page=1&include_adult=false&year=2019&year=2020`,
  );
}
