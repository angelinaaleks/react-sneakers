import React from 'react';
import { CartContext } from '../context';

export const Drawer = ({ onRemove }) => {
  const { setCartOpened } = React.useContext(CartContext);
  const { cartItems } = React.useContext(CartContext);

  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column justify-between">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            onClick={() => setCartOpened(false)}
            className="remove cu-p"
            src="/img/remove.svg"
            alt="remove"
          />
        </h2>
        {cartItems.length > 0 ? (
          <div className="items">
            {/* <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-10 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove" src="/img/remove.svg" alt="remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"></div>
            <div className="mr-10 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove" src="/img/remove.svg" alt="remove" />
          </div> */}
            {cartItems.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: `url(${obj.img})` }} className="cartItemImg"></div>
                <div className="mr-10 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img
                  className="remove"
                  src="/img/remove.svg"
                  alt="remove"
                  onClick={() => onRemove(obj.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="noItems">
            <h1>Noooooooo</h1>
            <button onClick={() => setCartOpened(false)} className="greenButton">
              back
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        )}
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
