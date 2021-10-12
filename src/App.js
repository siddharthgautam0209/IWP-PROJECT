import React from 'react'
import { Products, Navbar, Cart, MyCarousel} from './Components';

import { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const App = () => {

    const [products, setProducts] = useState([]);
    const [carouselItems, setCarouselItems] = useState([]);
    const [cart, setCart] = useState({});

    const fetchCart = async () => {

        setCart(await commerce.cart.retrieve());
    }
    const fetchProducts = async () => {
        const { data } = await commerce.products.list({category_slug: ['recommended']});
        setProducts(data);
    }

    const fetchCarouselItems = async () => {
        const { data } = await commerce.products.list( {category_slug: ['carousel']});
        setCarouselItems(data);
    }
    const fetchSearchedItems = async() => {
        const quer =  await document.getElementById('search').value;
        if(quer!="")
        {
            const resp= await commerce.products.list( {query: quer});
            setProducts(resp.data);
        console.log(quer,resp.data);}
        else {
            fetchProducts();
        }
    }

    const fetchMouses = async () => {
        const { data } = await commerce.products.list( {category_slug: ['mouse']});
        setProducts(data);
    }
    const fetchKeyboards = async () => {
        const { data } = await commerce.products.list( {category_slug: ['keyboard']});
        setProducts(data);
    }
    const fetchHeadphones = async () => {
        const { data } = await commerce.products.list( {category_slug: ['headphone']});
        setProducts(data);
    }
    const fetchMonitors = async () => {
        const { data } = await commerce.products.list( {category_slug: ['monitor']});
        setProducts(data);
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }
    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity: quantity });
        setCart(cart);
    }
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    }



    useEffect(() => {
        fetchProducts();
        fetchCart();
        fetchCarouselItems();

    }, []);

    //console.log(cart);
    return (
        <Router>
            <div>
            <Navbar totalItems={cart.total_items} fetchSearchedItems = {fetchSearchedItems} fetchMouses = {fetchMouses} fetchKeyboards = {fetchKeyboards} fetchHeadphones = {fetchHeadphones} fetchMonitors = {fetchMonitors} />

                <Switch>

                    <Route exact path="/">
                        <MyCarousel items = {carouselItems}/>
                        <Products prods={products} onAddToCart={handleAddToCart} />
                        {/* <Login/> */}
                    </Route>

                    {/* <Route exact path="/cart"><Products prods={products} onAddToCart={handleAddToCart}/></Route> */}
                    <Route exact path="/cart">
                        <Cart cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
