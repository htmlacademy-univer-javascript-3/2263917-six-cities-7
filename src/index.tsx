import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { nearbyOffers } from './mocks/nearby';
import { store } from './store';
import { Provider } from 'react-redux';
import { fillOffers } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fillOffers(offers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers} reviews={reviews} nearbyOffers={nearbyOffers} />
    </Provider>
  </React.StrictMode>
);
