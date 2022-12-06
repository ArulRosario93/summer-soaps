import React, { useEffect, useState } from "react"
import Cart from "./Cart/Cart.jsx";

import RealForm from "./CheckoutForm/RealForm.jsx";

import Review from "./Review/Review.jsx";

import { useHistory } from "react-router-dom";

import { commerce } from "../../lib/commerce.jsx";

const Checkout = ({
    cart,
    selectOpt,
    handleCaptureCheckout,
    onEssenceChangeOnCart,
    handleOnEmptyCart,
    handleRemoveCartQty,
    handleUpdateCartQty,
    onRealHandleChange,
    setname
    }) => {

        const [activeStep, setActiveStep] = useState(0);
        const [shippingData, setShippingData] = useState({});
        const [checkoutToken, setCheckoutToken] = useState(null);

        const steps = ["Your Cart", "Address Form"];

        const history = useHistory();

        useEffect(() => {
            const generateToken = async () => {
              try {
                const token = await commerce.checkout.generateToken(cart.id, { type: "cart"});
                console.log(token, "checkout")
                setCheckoutToken(token)
                
                //summa dhan :)
            } catch (error) {
                  history.push("/")
              }
            }
            generateToken(); 
          }, [cart])

            const nextStep = () => (
                setActiveStep((prevActiveStep) => (
                    prevActiveStep + 1
                ))
            )
            
          const handleChangeItBruh = ( data ) => {
              console.log(data, "Shipping data from one output");
              setShippingData(data);

              nextStep();
            }

            const Form = () => activeStep === 0 
                ? <Cart
                    cart={cart}
                        selectOpt={selectOpt}
                        handleCaptureCheckout={handleCaptureCheckout}
                        onEssenceChangeOnCart={onEssenceChangeOnCart}
                        handleOnEmptyCart={handleOnEmptyCart}
                        handleRemoveCartQty={handleRemoveCartQty}
                        handleUpdateCartQty={handleUpdateCartQty}
                        onRealHandleChange={onRealHandleChange}
                        nextStep={nextStep}
                /> : <RealForm 
                handleChangeItBruh={handleChangeItBruh}
                setname={setname}
            />

            return(
                <>
                    <img id="handIMGBRUH" style={{display: "none"}} src="" alt="yoo hands"/>
                    <div className="CONTAINEEEE">
                            {steps.map((step) => {
                                <div style={{height: "100vh"}} key={step}>
                                    <h2>{step}</h2>
                                    <h1>Will be here</h1>
                                </div>
                            })}
                            {activeStep === steps.length ? checkoutToken && <Review shippingData={shippingData} name={checkoutToken} handleCaptureCheckout={handleCaptureCheckout}/> : <Form />}
                    </div>
                </>
  )
}

export default Checkout;