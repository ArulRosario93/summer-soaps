import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles.js"
import "./styles.css";
import CartItem from "./CartItem/CartItem.jsx";
import { Link } from "react-router-dom";
import srcImg from "./red.jpg";

const Cart = ({  selectOpt, cart, handleUpdateCartQty, nextStep, handleRemoveCartQty, handleOnEmptyCart, onRealHandleChange, onEssenceChangeOnCart }) => {
    const sayWhat = !cart.total_items;
    const classes = useStyles();

    function EmptyCartttt () {
        return(
            <div className="empty">
                <Typography variant="subtitle1">Your Cart is Empty</Typography>
                <Link to="/" className={classes.link}>Add some Cart</Link>
            </div>
        )
    }

    function FullCart () {
        return(
            <div className="YOO">
            {/* <img src={srcImg} className="faliinHearts" alt="home"/> */}
                <h1>Your Cart</h1>
                <Grid container spacing={3}>
                    {
                        cart.line_items.map(cartt => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={cartt.id}>
                                <CartItem cart={cartt} selectOpt={selectOpt} onRealHandleChange={onRealHandleChange} handleUpdateCartQty={handleUpdateCartQty} onEssenceChangeOnCart={onEssenceChangeOnCart} handleRemoveCartQty={handleRemoveCartQty}/>
                        </Grid>
                        ))
                    }
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant="h6">SubTotal: {cart.subtotal.formatted_with_symbol}</Typography>
                    <div>
                        <Button classname={classes.emptyButton} size="small" type="button" variant="contained" onClick={() => handleOnEmptyCart()} color="secondary">Empty Cart</Button>
                        <Button classname={classes.emptyButton} size="small" type="button" variant="contained" onClick={() => nextStep()} color="primary">Checkout</Button>
                    </div>
                </div>
            </div>
        )
    }
    return(
        sayWhat ? <EmptyCartttt /> : <FullCart />
    )
}

export default Cart;