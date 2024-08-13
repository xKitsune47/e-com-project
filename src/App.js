import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { tailChase } from "ldrs";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Header } from "./components/Header";
tailChase.register();

export let products;

export default function App() {
    return (
        <>
            <UpdateBody />
            <Footer />
        </>
    );
}

function UpdateBody() {
    const [search, setSearch] = useState("");
    const [categorySearch, setCategorySearch] = useState("");
    const [cart, setCart] = useState([]);
    const [fetched, setFetched] = useState(false);

    async function fetchProducts() {
        if (!fetched) {
            await fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((prod) => {
                    products = prod;
                    setFetched(true);
                });
        }
    }

    fetchProducts();

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function handleCategorySearch(cat) {
        setCategorySearch(cat);
        console.log(cat);
    }

    function handleAddToCart(item) {
        const newItemObj = products.find((element) => element.id === item);
        let newItem = {
            id: item,
            title: newItemObj.title,
            price: newItemObj.price,
        };
        // tried to add "quantity" value, but whenever the quantity value of ANY item was 2,
        // the next cart addition caused an error

        setCart((cart) => [...cart, newItem]);
    }

    function handleDeleteFromCart(itemIndex) {
        setCart(() =>
            cart.slice(0, itemIndex).concat(cart.slice(-itemIndex + 1))
        );
    }

    return (
        <>
            <Header
                onSearchChange={handleSearch}
                search={search}
                cart={cart}
                onDeleteFromCart={handleDeleteFromCart}
                onCategorySearch={handleCategorySearch}
            />
            <Main
                search={search}
                categorySearch={categorySearch}
                onAddToCart={handleAddToCart}
            />
        </>
    );
}
