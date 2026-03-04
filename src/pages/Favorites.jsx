import React from 'react';
import { CartContext } from '../context';
import { Card } from '../components/Card/Card';

export const Favorites = () => {
  const { favorite } = React.useContext(CartContext);
  //   console.log(favorite);
  return (
    <div className="content p-45">
      <div className="d-flex mb-40">
        <h1>Мои закладки</h1>
      </div>
      {favorite.length === 0 ? (
        'Пока ничего нет, добавьте товары в исзбранное и они здесь появятся'
      ) : (
        <div className="sneakers">
          {favorite.map((obj) => (
            <Card {...obj} key={obj.title} favorited={true} />
          ))}
        </div>
      )}
    </div>
  );
};
