import React from "react";
import DDeliver from "./deliver.jpg";

import "./styles.css";

const Deliver = () => {

    return(
        <div className="homeD">
            <div className="FORR">
                <h1 style={{fontFamily: 'sans-serif-light'}}>How it's Delivered</h1>
                <div className="ggg">
                    <img src={DDeliver} className="delivery"/>
                </div>
            </div>
        </div>
    )
}

export default Deliver;