import { OfferCard } from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type NearbyCardProps = {
  offer: Offer;
};

export const NearbyCard = ({ offer }: NearbyCardProps) => (
  <OfferCard offer={offer} variant="near-places" />
);
