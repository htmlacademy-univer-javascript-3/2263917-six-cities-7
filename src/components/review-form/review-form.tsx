import { ChangeEvent, Fragment, useState } from 'react';
import { REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH, RATING_VALUES } from '../../const/const';

type ReviewFormData = {
  rating: number;
  comment: string;
};

export const ReviewForm = () => {
  const [formData, setFormData] = useState<ReviewFormData>({
    rating: 0,
    comment: '',
  });

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, rating: Number(evt.target.value) }));
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, comment: evt.target.value }));
  };

  const isValid =
    formData.rating > 0 &&
    formData.comment.trim().length >= REVIEW_MIN_LENGTH &&
    formData.comment.trim().length <= REVIEW_MAX_LENGTH;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="comment">
        Your comment
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING_VALUES.map((value) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={formData.rating === value}
              onChange={handleRatingChange}
            />
            <label
              className="reviews__rating-label form__rating-label"
              htmlFor={`${value}-stars`}
              title="perfect"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit comment please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{REVIEW_MIN_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
