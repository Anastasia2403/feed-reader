import axios from 'axios';
import { Feed } from '../types/feed.type';

const BaseUrl = 'https://jsonplaceholder.typicode.com';

export const addFeed = async (feed: Feed) => {
  const { data } = await axios.post(`${BaseUrl}/posts`, feed);
  return data;
};

export const getFeeds = async (userId: number) => {
  const { data } = await axios.get(`${BaseUrl}/posts?userId=${userId}`);
  return data;
};

export const deleteFeed = async (id: number) => {
  const { data } = await axios.delete(`${BaseUrl}/posts/${id}`);
  return data;
};
