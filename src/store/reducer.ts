import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './action';
import { AppState } from '../types/state';

const initialState: AppState = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
