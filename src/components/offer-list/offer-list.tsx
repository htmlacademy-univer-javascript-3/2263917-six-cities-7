import { Offer } from '../../types/offer';
import { OfferCard } from '../offer-card/offer-card';

type OfferListVariant = 'cities' | 'near-places';

type OfferListProps = {
  offers: Offer[];
  variant?: OfferListVariant;
  activeOfferId?: string | null;
  onOfferHover?: (id: string | null) => void;
};

export const OfferList = ({ offers, variant = 'cities', activeOfferId, onOfferHover,}: OfferListProps) => (
  <div className={ variant === 'cities' ? 'cities__places-list places__list tabs__content' : 'near-places__list places__list' }>
    {offers.map((offer) => (
      <OfferCard
        key={offer.id}
        offer={offer}
        variant={variant}
        isActive={offer.id === activeOfferId}
        onMouseEnter={() => onOfferHover?.(offer.id)}
        onMouseLeave={() => onOfferHover?.(null)}
      />
    ))}
  </div>
);
