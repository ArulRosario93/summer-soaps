import React, { useState } from "react"
import { useForm, FormProvider  } from "react-hook-form";
import { Button, Grid, Typography } from "@material-ui/core";
import srcImg from "./stars.png"
import { TextField } from "@material-ui/core";

import "./styles.css";

const RealForm = ({ handleChangeItBruh, setname }) => {
    
    const methods = useForm();

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    
    return(
    <>
        <div className="yee" id="yee">
                <div>
                <div className="eeeaaaa">
                {/* <img className="starsss" src={srcImg}/> */}
                <Typography variant="h6" className="hhhh" gutterBottom>
                Address Form
                </Typography>
                <FormProvider {...methods} className="formm">
                    <form className="FORM" onSubmit={methods.handleSubmit((data) => handleChangeItBruh({ firstName, lastName, address, email, city, pincode }))}>
                    <Grid container spacing={2}>
                        <Grid spacing={3} item xs={12} sm={6}>
                            <TextField onChange={(e) => setFirstName(e.target.value)} required value={firstName} type="text" name="firstName" label="First Name"/>
                        </Grid>
                        <Grid spacing={3} item xs={12} sm={6}>
                            <TextField onChange={(e) => setlastName(e.target.value)} required value={lastName} type="text" name="lastName" label="Last name"/>
                        </Grid>
                        <Grid spacing={3} item xs={12} sm={6}>
                            <TextField onChange={(e) => setAddress(e.target.value)} required type="text" value={address} name="address" label="Address"/>
                        </Grid>
                        <Grid spacing={3} item xs={12} sm={6}>
                            <TextField onChange={(e) => setEmail(e.target.value)} required type="email" name="email" value={email} label="Email"/>
                        </Grid>
                        <Grid spacing={3} item xs={12} sm={6}>    
                            <TextField onChange={(e) => setCity(e.target.value)} required type="text" name="city" label="City" value={city}/>
                        </Grid>
                        <Grid spacing={3} item xs={12} sm={6}>
                            <TextField onChange={(e) => setPincode(e.target.value)} required type="number" name="postcode" label="Post code" value={pincode}/>
                        </Grid>
                    </Grid>
                    <div className="maja">
                    </div>
                    <br />
                    <Button variant="contained" color="secondary" type='submit'>
                        Submit  
                    </Button>
                    </form>
                </FormProvider>
                </div>
            </div>
            </div>
        </>
    )
}

export default RealForm;