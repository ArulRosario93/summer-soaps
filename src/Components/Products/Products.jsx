import React from "react";
import Grid from '@material-ui/core/Grid';
import Product from "./Product/Product.jsx";
import useStyles from "./styles.jsx";
import "./styles.css";

const Products = ({ products, onCartAdd }) => {
    const classes = useStyles();

    return(
    <>
    <span id="pro"></span>
        <div className="CONTAINER">
            <main className={classes.content}>
            <h1 style={{fontFamily: 'sans-serif-light'}}>Products</h1>
                <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={8}>
                    {products.map(product => {
                        return(
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={4}>
                                <Product className="producttt" product={product} onCartAdd={onCartAdd}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </main>
        </div>
    </>
    )
}

export default Products;