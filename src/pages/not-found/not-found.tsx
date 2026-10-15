import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/routes';

export const NotFoundPage = () => (
  <div className="page">
    <h1>404 Not Found</h1>
    <Link to={AppRoute.Main}>На главную</Link>
  </div>
);
