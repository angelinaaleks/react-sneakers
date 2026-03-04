import React from "react";
// import { Card } from "./components/Card/Card";
import { Drawer } from "./components/Drawer";
import { Header } from "./components/Header";
import { CartContext } from "./context";
import { Skeleton } from './components/Skeleton'
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

// const arr = [{ title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999', img: 'img/sneakers/1.jpg' },
// { title: 'Мужские Кроссовки Nike Air Max 270', price: '12 999', img: 'img/sneakers/2.jpg' },
// { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', img: 'img/sneakers/3.jpg' },
// { title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999', img: 'img/sneakers/4.jpg' },
// { title: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199', img: 'img/sneakers/5.jpg' },
// { title: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299', img: 'img/sneakers/6.jpg' }]

function App() {

    const [cartOpened, setCartOpened] = React.useState(false)
    const [sneakers, setSneakers] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])
    const [value, setValue] = React.useState('')
    const [sortOpened, setSortOpened] = React.useState(false)
    const [sortChoice, setSortChoice] = React.useState({ name: 'популярности', property: 'rating', order: 'asc' })
    const [favorite, setFavorite] = React.useState([])

    React.useEffect(() => {
        // fetch(`https://6913056e52a60f10c823b49a.mockapi.io/items?search=${value}&sortBy=${sortChoice.property}&order=${sortChoice.order}`)
        //     .then((res) => res.json())
        //     .then((obj) => setSneakers(obj))

        axios.get(`https://6913056e52a60f10c823b49a.mockapi.io/items?search=${value}&sortBy=${sortChoice.property}&order=${sortChoice.order}`).then(res =>
            setSneakers(res.data)
        )

        axios.get(`https://6913056e52a60f10c823b49a.mockapi.io/cart`).then(res =>
            setCartItems(res.data)
        )
    }, [value, sortChoice])

    // console.log(arr)
    // console.log(cartOpened)
    // console.log(sneakers)
    //console.log(cartItems)

    const onPlus = (item) => {
        axios.post(`https://6913056e52a60f10c823b49a.mockapi.io/cart`, item)
        setCartItems(prev => [...prev, item])
    }

    const onRemoveItem = (id) => {
        // axios.delete(`https://6913056e52a60f10c823b49a.mockapi.io/cart/${id}`)
        setCartItems(prev => prev.filter(item => item.id !== id))
        console.log(id)
    }

    const sort = [
        {
            name: "популярности",
            property: "rating",
            order: 'asc'
        },
        {
            name: "возрастанию",
            property: "price",
            order: 'asc'
        },
        {
            name: "убыванию",
            property: "price",
            order: 'desc'
        },
        {
            name: "алфавиту",
            property: "title",
            order: 'asc'
        }
    ]

    const onAddFavorite = (item) => {
        // axios.post('https://6913056e52a60f10c823b49a.mockapi.io/favorite', item)
        setFavorite((prev) => [...prev, item])
    }

    console.log(favorite)

    return (
        <CartContext.Provider value={{
            onAddFavorite,
            setCartOpened,
            cartItems,
            setCartItems,
            sneakers,
            value,
            setSortOpened,
            sortOpened,
            sortChoice,
            sort,
            setSortChoice,
            setValue,
            onPlus
        }}>
            <div className="wrapper clear">
                {cartOpened && <Drawer onRemove={onRemoveItem} />}
                <Header />

                <Routes>
                    <Route path="/" element={
                        <Home />
                    } />
                    <Route path="/favorites" element={<h1>fghdj</h1>} />
                </Routes>
            </div>
        </CartContext.Provider>
    );
}

export default App;
