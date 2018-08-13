import axios, { AxiosResponse } from 'axios';

export const fetchHackerNews = (id: string) => {
  return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res: AxiosResponse) => {
      const { title, url } = res.data;
      return {
        title,
        url,
      };
    });
};
