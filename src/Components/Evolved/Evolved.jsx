import React from "react";

import TSY from "./TSY.png";

import "./styles.css";

const Evolved = () => {
    return(
        <div className="homie">
            <div className="TFI">
                <div className="GETIT">
                    <div className="INNTER">
                        <h2>YOU WANT SOME?</h2>
                        <h5>COME AND GET SOME</h5>
                        <a href="#pro" className="id">Products</a>
                    </div>
                </div>
                <div className="soapsBRUH">
                    <img className="TSY" src={TSY} alt="soaps"/>
                    <br/>
                    <em className="em">Featured Apple Soaps</em>
                </div>
            </div>
        </div>
    )
}

export default Evolved;