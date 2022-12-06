import React from "react";
import "./styles.css";
import hand from "./hand.png";
import hand2 from "./hand2.png";
import hand3 from "./hand3.png";
import hand4 from "./hand4.png";
import hand5 from "./hand5.png";
import hand8 from "./hand8.png";
import { fontWeight } from "@material-ui/system";
import { useHistory } from "react-router";

const Hands = () => {
    const HandYARR = [hand, hand2, hand3, hand4, hand5, hand8];

    const history =  useHistory();

    if(window.innerWidth <= 1000){
        const myVar = setInterval(() => {
            const ran = Math.floor(Math.random() * HandYARR.length);
            const selectIT = HandYARR[ran]
            if(history.location.pathname !== "/"){
                clearInterval(myVar);
            }else{
                document.querySelector("#handIMGBRUHaetr").src = selectIT
            }
        }, 6000)
    }else{
        const myVar = setInterval(() => {
            const ran = Math.floor(Math.random() * HandYARR.length);
            const selectIT = HandYARR[ran]
            if(history.location.pathname !== "/"){
                clearInterval(myVar);
            }else{
                document.querySelector("#handIMGBRUH").src = selectIT
            }
        }, 6000)
    }
    return(
        <>
        <div className="HAND">
            <div className="SOMETHING">
                <div className="somthin">
                <div>
                    <h2 style={{fontFamily: 'notoserif', fontSize: "160%", color: 'white', fontWeight: "160%"}}>We make soaps with different kinds of essence and flavor.</h2>
                    <p style={{fontFamily: 'serif', fontSize: "240%", color: 'white', fontWeight: "200%"}}>But more importantly, we make it with   <label className="heart">&#10084;&#65039;</label></p>
                </div>
                </div>
                <div className="leftHAND">
                    <img id="handIMGBRUH" src={hand} alt="yoo hands"/>
                </div>
            </div>
        </div>
        <div className="yooItshereF">
            <div className="insideTheInside">
                <div>
                    <h2 style={{color: 'white'}}><b>We make soaps with different kinds of essence and flavor.</b></h2>
                </div>
                <div className="leftHAND">
                    <img id="handIMGBRUHaetr" src={hand} alt="yoo hands"/>
                </div>
                <div className="withLOVE">
                    <b style={{color: 'white'}}>But more importantly, we make it with<label className="heart">&#10084;&#65039;</label></b>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hands;