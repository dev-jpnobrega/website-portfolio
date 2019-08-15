import { fetchNews } from '../../service/news-service';
import { FETCH_NEWS, FETCHED_NEWS, SHOW_ALL, SHOW_GROUP_BY_ID } from './news-actions';

export const initialNewsState = {
  news: [],
  newsFilter: [],
};

export const newsReducer = (state, action) => {
  switch (action.type) {
    case FETCHED_NEWS:
        return { ...state, news: [ ...action.news ] };
    case FETCH_NEWS:
      const result = fetchNews(action);
      console.warn('result', result);
      return { ...state, news: [ ...result ] };
    case SHOW_ALL:
      return state;
    case SHOW_GROUP_BY_ID:      
      return { 
        ...state, 
        newsFilter: state.news.filter(n => n.group === action.group) 
      }
    default:
      return state;
  }
};