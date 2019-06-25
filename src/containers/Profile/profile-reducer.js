import { fetchUserById } from '../../service/user-service'
import { FETCH_USER_BY_ID } from './profile-actions';

export const initialProfileState = { };

export const profileReducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID:
      return { 
        ...fetchUserById({ id: action.id }),
      }
    default:
      return state;
  }
};