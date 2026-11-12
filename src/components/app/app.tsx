import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main/main';
import { LoginPage } from '../../pages/login/login';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { NotFoundPage } from '../../pages/not-found/not-found';
import { OfferPage } from '../../pages/offer/offer';
import { PrivateRoute } from '../private-route/private-route';
import { AppRoute } from '../../const/routes';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';

type AppProps = {
  offers: Offer[];
  reviews: Review[];
  nearbyOffers: Offer[];
};

export const App = ({ offers, reviews, nearbyOffers }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute isAuthorized>
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer} element={<OfferPage reviews={reviews} nearbyOffers={nearbyOffers} />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
