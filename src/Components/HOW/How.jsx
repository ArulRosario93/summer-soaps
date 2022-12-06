import React from "react";
import "./styles.css";
import GroupSoaps from "./groupSoaps.png";

const How = () => {
    return(
        <>
        <div className="howBruh">
            <div className="yesBelieve">
                <div className="eg">
                    <img src={GroupSoaps} alt="Soaps"/>
                </div>
                <div className="itsDone">
                    <h2 style={{fontFamily: 'sans-serif-light'}}><b>How Its done?</b></h2>
                    <p>          We seek that you should attain you're full limit on facial beauty, so we collected the best fragrance around the world ;)</p>
                </div>
            </div>
        </div>
        <div className="shoter">
                <div className="moreShorter">
                    <h1>How it's done?</h1>
                    <div className="eg">
                        <img src={GroupSoaps} alt="Soaps"/>
                    </div>
                    <p>We seek that you should attain you're full limit on facial beauty, so we collected the best fragrance around the world ;)</p>
                </div>
        </div>
        </>
    )
}

export default How