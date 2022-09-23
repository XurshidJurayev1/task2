import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoritesSlice as favorites } from './reducers/testRed';

const rootReducer = combineReducers({
  favorites,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const AppStore = setupStore;
export const AppDispatch = AppStore['dispatch'];
