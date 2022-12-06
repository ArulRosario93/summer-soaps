import React from "react";

import { TextField, Grid } from "@material-ui/core";
import { useFormContext } from "react-hook-form";

const Form = ({ type, name,  label }) => {

    const { control } = useFormContext();

    return(
        <>
            <Grid spacing={3} item xs={12} sm={6}>
                <TextField id="outlined-basic" name={name} type={type} label={label} required/>
            </Grid>
        </>
    )
}

export default Form;