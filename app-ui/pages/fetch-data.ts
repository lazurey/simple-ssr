import axios, { AxiosResponse } from 'axios';

export const fetchUsername = (id: string) => {
  return axios.get(`https://api.github.com/users/${id}`)
    .then((res: AxiosResponse) => {
      return {
        username: res.data.name,
      }
    });
};
