import { Card } from "./components/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";

const arr = [{ title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', img: 'img/sneakers/1.jpg' },
{ title: 'Мужские Кроссовки Nike Air Max 270', price: '12 999 руб.', img: 'img/sneakers/2.jpg' },
{ title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб.', img: 'img/sneakers/3.jpg' },
{ title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб.', img: 'img/sneakers/4.jpg' },
{ title: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199 руб.', img: 'img/sneakers/5.jpg' },
{ title: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299 руб.', img: 'img/sneakers/6.jpg' }]

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <div className="content p-45">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src='/img/search.svg' alt='Search' />
                        <input placeholder="Поиск" />
                    </div>
                </div>
                <div className="sneakers">
                    {
                        arr.map((obj) => <Card {...obj} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
