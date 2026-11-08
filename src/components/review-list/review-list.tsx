import { Review } from '../review/review';
import { Review as ReviewType } from '../../types/review';

const MAX_REVIEWS = 10;

type ReviewListProps = {
  reviews: ReviewType[];
};

export const ReviewList = ({ reviews }: ReviewListProps) => {
  if (reviews.length === 0) {
    return null;
  }

  const sortedReviews = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </section>
  );
};
