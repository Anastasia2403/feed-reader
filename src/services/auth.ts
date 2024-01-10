import axios from 'axios';

const BaseUrl = 'https://jsonplaceholder.typicode.com';

export const login = async () => {
  const { data } = await axios.get(`${BaseUrl}/users/1`);
  return data;
};
