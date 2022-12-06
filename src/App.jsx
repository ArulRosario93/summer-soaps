import React, { useEffect, useState } from "react";
import Products from "./Components/Products/Products.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Cards from "./Components/Card/Cards.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Review from "./Components/Checkout/Review/Review.jsx";
import ThankYou from "./Components/Thank You/ThankYou.jsx"
import FFooter from "./Components/Footer/FFooter.jsx";
import Evolved from "./Components/Evolved/Evolved.jsx";
import Deliver from "./Components/Deliver/Deliver.jsx";
import How from "./Components/HOW/How.jsx";
import Hands from "./Components/Hands/Hands.jsx";
import logo from "../src/leave.jpg";

import CssBaseline from '@material-ui/core/CssBaseline';

import Checkout from "./Components/Checkout/Checkout.jsx";

// import Provider from "./Provid";

import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Provider from "./Components/Provider.jsx";

import { commerce } from "./lib/commerce.jsx";

const App = () => {

    const [home, setHome] = useState(true);
    const [product, setproduct] = useState([]);
    const [cart, setCart] = useState({})
    const [realcart, setRealCart] = useState({})
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [firstname, setFirstName] = useState('');

    const fetchProduct =  async () => {
        const { data } = await commerce.products.list();
        setproduct(data)
    }
    let namme = firstname;
    const setname = (name) => {
        setFirstName(name);
    }

    const fetchCart = async () => {
        const response = await commerce.cart.retrieve();
        setCart(response);
    }

    const onHandleChange = async (productID, quantity) => {
        const Cart = await commerce.cart.add(productID, quantity);
        setCart(Cart.cart);
    }

    const onRealHandleChange = async (productID, quantity, variant) => {
        const Cart = await commerce.cart.add(productID, quantity, variant);
        setRealCart(Cart.cart);
        console.log(realcart, "real bruh");
    }

    const onEssenceChangeOnCart = async (productID) => {
        const essence = await commerce.products.getVariants(productID, {});
        // setCart(essence)
    }

    const handleUpdateCartQty = async (product, quantity) => {
        const { cart } = await commerce.cart.update(product, { quantity })
        setCart(cart);
    }

    const handleRemoveCartQty = async (product) => {
        const { cart } = await commerce.cart.remove(product)
        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
      };

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);    
          refreshCart();
        } catch (error) {
          setErrorMessage(error);
        }
      };

    const EmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart)
    }

    const selectOpt = async (productID, optMain) => {
        const variantMain = await commerce.products.getVariant(productID, optMain);
    }


    useEffect(() => {
        fetchProduct();
        fetchCart();
        setTimeout(() => setHome(false), 4000)
    }, []);

    return(
        <>
        <CssBaseline />
        <Router>
            <Provider>
            <Navbar totalItems={cart.total_items}/>
        <Switch>
            <Route exact path="/" >
                {
                    home ? <div className="welcome">
                                <img className="yeaIMgEE" src={logo} alt="logo"/>{'\n'}
                                <h2>  Jois Soaps</h2>
                            </div> : <div>
                    <Home />
                    <Evolved />
                    <How />
                    <Hands />
                    <Deliver />
                    <Products products={product} onCartAdd={onHandleChange}/>
                    <Cards />
                    <FFooter />
                </div>
                }
            </Route>
            <Route excat path="/checkout">
                <Checkout
                cart={cart}
                selectOpt={selectOpt}
                onRealHandleChange={onRealHandleChange}
                handleCaptureCheckout={handleCaptureCheckout}
                onEssenceChangeOnCart={onEssenceChangeOnCart}
                handleOnEmptyCart={EmptyCart}
                handleRemoveCartQty={handleRemoveCartQty}
                handleUpdateCartQty={handleUpdateCartQty}
                setname={setFirstName}
                />
                <FFooter />
            
            </Route>
            <Route excat path="/review">
                <Review cart={cart}/>
                <FFooter />
            </Route>
            <Route excat path="/thankyou">
                <ThankYou name={namme}/>
                <Footer />
            </Route>
        </Switch>
        </Provider>
        </Router>
        </>
    )
};

export default App;