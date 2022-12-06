import React from "react";
import "./styles.css";

import ConfettiGenerator from "confetti-js";
import thank from "./thank.jpg";

const ThankYou = ({ name }) => {

    React.useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
       
        return () => confetti.clear();
      }, [])

    return(
        <>
        <img id="handIMGBRUH" style={{display: "none"}} src="" alt="yoo hands"/>
        <canvas id="my-canvas">
        </canvas>
        <div className="hahaa">
            <div className="ahaa">
                <div className="aaaa">
                    <h5><b>Your order Confirmed {name}.</b></h5>
                    <b>Thank you for ordering from Jois Soaps. Visit again.</b>
                </div>
            </div>
        </div>
        </>
    )
}

export default ThankYou;