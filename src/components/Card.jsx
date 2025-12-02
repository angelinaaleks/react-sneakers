import React from 'react';

export const Card = ({ title, price, img }) => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="like" />
      </div>
      <img width={133} height={112} src={img} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <button className="button">
          <img width={32} height={32} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
