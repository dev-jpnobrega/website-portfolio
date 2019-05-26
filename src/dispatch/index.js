import React, { useReducer, createContext } from 'react';
import combineReducer from './combineReducer';

import newsReducer from '../containers/News/news-reducer';
import profileReducer from '../containers/Profile/profile-reducer';

export const DispatchContext = createContext(null);

export const DispatchContextProvider = ({ children }) => {
  const [ state, dispatch ] = combineReducer({
    news: useReducer(newsReducer, []),
    user: useReducer(profileReducer, {}),
  })

  return (
    <DispatchContext.Provider value={[ state, dispatch ]}>
      { children }
    </DispatchContext.Provider>
  )
};