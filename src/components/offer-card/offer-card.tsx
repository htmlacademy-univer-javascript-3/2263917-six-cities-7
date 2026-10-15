import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/routes';
import { getOfferRoute } from '../../const/routes';
import { Offer } from '../../types/offer';

type OfferCardProps = {
  offer: Offer;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const OfferCard = ({ offer, onMouseEnter, onMouseLeave }: OfferCardProps) => (
  <article
    className="cities__card place-card"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {offer.isPremium && (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    )}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={AppRoute.Main}>
        <img
          alt="Place image"
          className="place-card__image"
          height="200"
          src={offer.previewImage}
          width="260"
        />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">/ night</span>
        </div>
        <button
          className={`place-card__bookmark-button button${
            offer.isFavorite ? ' place-card__bookmark-button--active' : ''
          }`}
          type="button"
        >
          <svg
            className="place-card__bookmark-icon"
            height="19"
            width="18"
          >
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">
            {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
          </span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${(offer.rating / 5) * 100}%` }} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={getOfferRoute(offer.id)}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);
