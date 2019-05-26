import newsMock from '../assets/news.json';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
} 

export const fetchNews = (params) => {
  console.warn('fetchNews', params);

  return newsMock.data;
  return fetch('http://cloudfronttestebucket.s3.amazonaws.com/assets/news.json')
    .then(resp => resp.json())
    .then(r => r)
    .catch(err => console.error('error.fetch.news', err));    
}