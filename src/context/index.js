import React, { useReducer, createContext } from 'react';
import combineReducer from './combineReducer';

import { newsReducer, initialNewsState } from '../containers/News/news-reducer';
import { profileReducer, initialProfileState } from '../containers/Profile/profile-reducer';

export const Context = createContext(null);

export const Provider = ({ children }) => {
  const [ state, dispatch ] = combineReducer({
    news: useReducer(newsReducer, initialNewsState),
    user: useReducer(profileReducer, initialProfileState),
  })

  return (
    <Context.Provider value={[ state, dispatch ]}>
      { children }
    </Context.Provider>
  )
};
