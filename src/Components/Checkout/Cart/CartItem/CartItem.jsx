import React, { useState } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Card, CardMedia, CardContent, CardActions, IconButton } from "@material-ui/core";
import { Container, Typography, Button, Grid } from "@material-ui/core";

import useStyles from "./styles.jsx"

const CartItem = ({  cart, onRealHandleChange, handleUpdateCartQty, handleRemoveCartQty, onEssenceChangeOnCart }) => {
    const [flavor, setflavor] = useState("");


    const classes = useStyles();
    return (
    <div className="atHover">
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={cart.media.source} title={cart.name} />
                <div className="title">
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography  className="colorWhite" className={classes.bold} variant="h6">
                            {cart.name}
                        </Typography>
                        <Typography   className="colorWhite" className={classes.bold} variant="h6">
                            {cart.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <div className={classes.cardContent}>
                            <div className="flexx" className={classes.buttons}>
                                <Button className="colorWhite" type="button" onClick={() => handleUpdateCartQty(cart.id, cart.quantity - 1)} size="small">-</Button>
                                    <Typography>{cart.quantity}</Typography>
                                <Button className="colorWhite"  type="button" onClick={() => handleUpdateCartQty(cart.id, cart.quantity + 1)} size="small">+</Button>
                            </div>
                    </div>
                    <Button variant="contained" type="button" onClick={() => handleRemoveCartQty(cart.id)} color="secondary">Remove</Button>
                </CardContent>
                </div>
            </Card>
        </div>
)
}

export default CartItem;