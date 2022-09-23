import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default favoritesSlice.reducer;