import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles.jsx";

import "./styles.css";

const Product = ({ product, setEssenceToNone, onCartAdd }) => {
    const classes = useStyles();

    function onHandleChange(){
        onCartAdd(product.id, 1)
        // onEssenceChange(product.id, 0)
    }

    return(
        <div className="atHover">
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <div className="title">
                <CardContent>
                    <div className={classes.cardContent}>
                        <h6 className={classes.bold} className="contenBRUHt">
                            {product.name}
                        </h6>
                        <h6 className={classes.bold} className="contenBRUHt">
                            {product.price.formatted_with_symbol}
                        </h6>
                    </div>
                    
                </CardContent>
            </div>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton title="Add to Cart" aria-label="add to cart" onClick={() => onHandleChange()}>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product;