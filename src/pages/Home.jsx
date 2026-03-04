import React from 'react';
import { Card } from '../components/Card/Card';
import { CartContext } from '../context';

export const Home = () => {
  const {
    sneakers,
    value,
    setSortOpened,
    sortOpened,
    sortChoice,
    sort,
    setSortChoice,
    setValue,
    onPlus,
  } = React.useContext(CartContext);

  return (
    <div className="content p-45">
      <div className="d-flex mb-40">
        <h1>{value ? `Поиск по запросу: ${value}` : 'Все кроссовки'}</h1>
        <div className="sorting">
          <p onClick={() => setSortOpened(!sortOpened)}>{sortChoice.name}</p>
          {sortOpened === true ? (
            <div className="sortingChoice">
              {sort.map((valueSort) => (
                <p
                  onClick={() => {
                    setSortOpened(!sortOpened);
                    setSortChoice(valueSort);
                  }}
                  key={valueSort.name}>
                  {valueSort.name}
                </p>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="search-block">
          <img src="/img/search.svg" alt="Search" />
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Поиск" />
          <svg
            onClick={() => setValue('')}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30">
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
          </svg>
        </div>
      </div>
      {sneakers !== 'Not found' ? (
        <div className="sneakers">
          {sneakers.map((obj) => (
            <Card {...obj} onClickPlus={() => console.log(obj)} key={obj.title} onPlus={onPlus} />
          ))}
        </div>
      ) : (
        <div className="NotFound">
          <h2>
            По вашему запросу <b>{value}</b> ничего не найдено
          </h2>
        </div>
      )}
    </div>
  );
};
