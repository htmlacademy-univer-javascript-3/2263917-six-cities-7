import { OfferList } from '../offer-list/offer-list';
import { Offer } from '../../types/offer';

type NearbyListProps = {
  offers: Offer[];
};

export const NearbyList = ({ offers }: NearbyListProps) => (
  <OfferList offers={offers} variant="near-places" />
);
