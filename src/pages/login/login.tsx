import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/routes';

export const LoginPage = () => (
  <div className="page page--gray page--login">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.Main}>
              <img
                alt="6 cities logo"
                className="header__logo"
                height="41"
                src="img/logo.svg"
                width="81"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form action="#" className="login__form form" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                name="password"
                placeholder="Password"
                required
                type="password"
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
            Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={AppRoute.Main}>
              <span>Amsterdam</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  </div>
);
