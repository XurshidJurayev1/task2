import { api } from '../Api';
import { favoritesSlice } from '../reducers/testRed';
import { batch } from 'react-redux';


export const test = (test) => (dispatch) => {
  dispatch(favoritesSlice.actions.setLoading(true));
  api()
    .get('/favorites')
    .then((res) => {
      batch(() => {
        dispatch(favoritesSlice.actions.setFavorites(res.data));
        dispatch(favoritesSlice.actions.setLoading(false));
      });
    });
};