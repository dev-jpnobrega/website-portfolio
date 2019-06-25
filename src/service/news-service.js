import newsMock from '../assets/news.json';

const OPTIONS_REQUEST = {
  mode: 'cors',
}

export const fetchNews = (params) => {
  return newsMock.data; 
  return fetch('http://cloudfronttestebucket.s3.amazonaws.com/assets/news.json', OPTIONS_REQUEST)
    .then(resp => resp.text())
    .then(r => {
      console.warn('rrrrrrrr', JSON.parse(r));
      return r;
    })
    .catch(err => console.error('error.fetch.news', err));    
}