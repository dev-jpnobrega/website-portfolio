import axios from 'axios';
import newsMock from '../assets/news.json';

const OPTIONS_REQUEST = {
  headers: {
    'Accept': '*/*',
  //  'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
}

export const fetchNews = async (params) => {
  try  {
    const result = await axios.get(
      'https://cloudfronttestebucket.s3.amazonaws.com/assets/news.json',
      OPTIONS_REQUEST,
    )
    console.warn('result,' , result);
    return result;
  } catch (error) {
    console.warn('error' , error);
    return newsMock.data;
  }
}