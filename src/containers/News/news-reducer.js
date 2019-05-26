import { fetchNews } from '../../service/news-service'
import { FETCH_NEWS, SHOW_ALL, SHOW_GROUP_BY_ID } from './news-actions';

export default (state, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      const result = fetchNews(action);
      return state.concat([ ...result ]);
    case SHOW_ALL:
      return state;
    case SHOW_GROUP_BY_ID:      
      return state.filter(n => n.group === action.group);
    default:
      return state;
  }
};