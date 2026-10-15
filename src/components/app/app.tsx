import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main/main';
import { LoginPage } from '../../pages/login/login';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { NotFoundPage } from '../../pages/not-found/not-found';
import { OfferPage } from '../../pages/offer/offer';
import { PrivateRoute } from '../private-route/private-route';
import { AppRoute } from '../../const/routes';
import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[];
};

export const App = ({ offers }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<MainPage offers={offers} />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute isAuthorized>
            <FavoritesPage offers={offers} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer} element={<OfferPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
