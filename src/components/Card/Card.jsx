import React from 'react';
import styles from './styles.module.scss';
import { CartContext } from '../../context';

export const Card = ({ id, title, price, img, onPlus, favorited }) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [like, setLiked] = React.useState(favorited);
  const { onAddFavorite } = React.useContext(CartContext);
  //   const { isAdded, setIsAdded } = React.useContext(CartContext);

  const handlePlus = () => {
    onPlus({ id, title, price, img });
    setIsAdded(!isAdded);
  };

  const onClickLike = () => {
    onAddFavorite({ id, title, price, img });
    // console.log(like);
    setLiked(!like);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickLike}
          src={like === false ? '/img/unliked.svg' : '/img/liked.svg'}
          alt="like"
        />
      </div>
      <img width={133} height={112} src={img} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className={styles.button}>
          <img
            onClick={handlePlus}
            width={32}
            height={32}
            src={isAdded === false ? '/img/plus.svg' : '/img/cheked.svg'}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};
