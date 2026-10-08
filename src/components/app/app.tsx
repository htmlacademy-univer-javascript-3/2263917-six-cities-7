import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../../pages/main/main';
import { LoginPage } from '../../pages/login/login';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { NotFoundPage } from '../../pages/not-found/not-found';
import { OfferPage } from '../../pages/offer/offer';
import { PrivateRoute } from '../private-route/private-route';

type AppProps = {
  offersCount: number;
};

export const App = ({ offersCount }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage offersCount={offersCount} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute isAuthorized={false}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path="/offer/:id" element={<OfferPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
