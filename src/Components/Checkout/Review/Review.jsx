import React from "react";
import { Typography, List, ListItem, ListItemText, Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";

import { ElementsConsumer, Elements, CardElement } from "@stripe/react-stripe-js";

import srcImg from "./starShines.png";

import "./styles.css";

const stripePromise = loadStripe("pk_test_51J3aNiSJ3cIYDVdD0vUvTMWKnqI5hdbodGwqqf0a3SwTmNNt6UFA09oeg6ay13WJ1OV5LXCoBsdjtg8QcUsJ4PDR009rGr0Lht", true);

const Review = ({ name, shippingData, handleCaptureCheckout }) => {
    
    const history = useHistory();

    const handleSubmit = async (event, stripe, elements) => {

        event.preventDefault();

        if (!stripe || !elements) {return}

        const buttonn = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: buttonn });

        if(error){
            console.log(error);
        }else{
            const newOrder = {
                line_items: name.live.line_items,
                customer: {firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email},
                shipping: {
                    name: `Primary`,
                    street: shippingData.address,
                    town_city: shippingData.city,
                    postal_zip_code: shippingData.postcode
                },
                billing: {
                    name: shippingData.firstName,
                    street: shippingData.address,
                    town_city: shippingData.city,
                    county_state: 'IND-TN',
                    postal_zip_code: "600 028",
                    country: 'IND'
                },
                payment: {
                    gateway: 'stripe',
                    stripe: {
                    payment_method_id: paymentMethod.id
                    }
                },
            }
            handleCaptureCheckout(name.id, newOrder);
            history.push("/thankyou");
        }
    }

    return(
        <div className="REV">
        {/* <img className="starShine" src={srcImg} alt="img"/> */}
        <div className="rev">
        <Typography className="order">Order Summary</Typography>
            <div className="innn">
                <div className="RREEVV">
                <List>
                <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {
                        ({ elements , stripe}) => (
                        <form onSubmit={(e) => handleSubmit(e, stripe, elements)}>
                            {
                                name.live.line_items.map(product => {
                                return(
                                <div>
                                    <ListItem key={name.id} style={{padding: "10px 0"}}>
                                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`}/>
                                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                                    </ListItem>
                                </div> 
                            )
                        })
                        }
                            <ListItem style={{padding: "10px 0"}}>
                                    <ListItemText primary="Total"/>
                                    <Typography variant="subtitle1" style={{fontWeight: "700"}}>
                                        {name.live.subtotal.formatted_with_symbol}
                                    </Typography>
                            </ListItem>
                            <CardElement />
                            <Button id="bbttnn" type="submit" color="primary" className="btn" size="large">Confirm Order</Button>  
                        </form>
                        )
                    }
                    </ElementsConsumer>
                </Elements>
                </List>
                </div>
                <div className="flip">
            </div>
            </div>
        </div>
    </div>
    )
}

export default Review;