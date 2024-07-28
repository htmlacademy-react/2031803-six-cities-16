import React from 'react';
import { Offer } from '../../mocks/types.ts';

interface CardProps {
  offer: Offer;
  isFavoritesPage?: boolean;
}

const Card = ({ offer, isFavoritesPage = false }: CardProps): React.JSX.Element => {
  const { isPremium, images, price, title, type, isFavorite, rating } = offer;
  return (
    <article className={`${isFavoritesPage ? 'favorites' : 'cities'}__card place-card`}>
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className={`${isFavoritesPage ? 'favorites' : 'cities'}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          {isFavoritesPage ?
            <img className="place-card__image" src={images[0]} width="150" height="110" alt="Place image"/>
            :
            <img className="place-card__image" src={images[0]} width="260" height="200" alt="Place image"/>}
        </a>
      </div>
      <div className={`${isFavoritesPage ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {
            isFavorite ?
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
              :
              <button className="place-card__bookmark-button button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
          }
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating / 5 * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default Card;
