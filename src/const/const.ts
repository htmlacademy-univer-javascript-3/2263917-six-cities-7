import { City } from '../types/offer';

export const REVIEW_MIN_LENGTH = 50;
export const REVIEW_MAX_LENGTH = 300;

export const RATING_VALUES = [5, 4, 3, 2, 1] as const;

export const MAX_REVIEWS = 10;

export const CITIES: Record<string, City> = {
  Paris: { name: 'Paris', location: { latitude: 48.8566, longitude: 2.3522, zoom: 10 } },
  Cologne: { name: 'Cologne', location: { latitude: 50.9375, longitude: 6.9603, zoom: 10 } },
  Brussels: { name: 'Brussels', location: { latitude: 50.8503, longitude: 4.3517, zoom: 10 } },
  Amsterdam: { name: 'Amsterdam', location: { latitude: 52.374, longitude: 4.88969, zoom: 10 } },
  Hamburg: { name: 'Hamburg', location: { latitude: 53.5511, longitude: 9.9937, zoom: 10 } },
  Dusseldorf: { name: 'Dusseldorf', location: { latitude: 51.2277, longitude: 6.7735, zoom: 10 } },
};
