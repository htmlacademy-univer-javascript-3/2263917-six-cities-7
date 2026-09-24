import { MainPage } from '../pages/MainPage';

type AppProps = {
  offersCount: number;
};

export const App = ({ offersCount }: AppProps) => (
  <MainPage offersCount={offersCount} />
);
