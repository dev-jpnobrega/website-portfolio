import { fetchUserById } from '../../service/user-serivce'
import { FETCH_USER_BY_ID } from './profile-actions';

export default (state, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID:
      const result = fetchUserById({ id: action.id });
      console.warn('result', result);
      return { ...result }
    default:
      return state;
  }
};