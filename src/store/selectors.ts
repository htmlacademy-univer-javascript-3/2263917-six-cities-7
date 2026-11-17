import { State } from '../types/state';
import { Offer } from '../types/offer';

export const selectCity = (state: State) => state.city;
export const selectOffers = (state: State) => state.offers;

export const selectFilteredOffers = (state: State): Offer[] =>
  state.offers.filter((offer) => offer.city.name === state.city);
