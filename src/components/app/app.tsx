import { MainPage } from '../../pages/main/main';

type AppProps = {
  offersCount: number;
};

export const App = ({ offersCount }: AppProps) => (
  <MainPage offersCount={offersCount} />
);
