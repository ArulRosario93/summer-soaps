import React from "react";
import "./styles.css";

import sha from "./marketMan.jpg";
import jo from "./zan.jpg";
import ro from "./webDes.jpg";

const Cards = () => {
    return(
        <>
        <br />
        <br />
        <div className="contain">
        <h2 style={{fontFamily: 'sans-serif-light'}}>Our Top Review</h2>
        <br />
        <br />
            <div className="WHOLE" style={{transition: "1s", border: '0.1px solid black'}}>
                <div className="TOP">
                <div className="top">
                        <div className="IMG">
                            <img src={sha} width="100px" height="100px;" alt="avatar"/>
                            <br />
                            <br />
                            <b className="nameTHIS">Sharon</b>
                            <br />
                            <b>Marketing Manager</b>
                        </div>
                    </div>
                <hr />
                </div>
                <div className="DOWN">
                        <label className="doSomethin">&ldquo;</label>
                        <br />
                        <span className="yaya" style={{fontFamily: "unset", fontSize: "110%"}}><b>Jefs summer soaps is an authentic business, making colorful and fun soaps and being able to share with family and friends is what makes our business special.</b></span>
                        <br/>
                        <br/ >
                        <label className="doSomethin">&rdquo;</label>
                    </div>
            </div>
            <div className="WHOLE" style={{transition: "1s", border: '0.1px solid black'}}>
                <div className="TOP">
                    <div className="top">
                        <div className="IMG">
                            <img src={jo} width="100px" height="100px;" alt="avatar"/>
                            <br />
                            <br />
                            <b className="nameTHIS">Hosaee</b>
                            <br />
                            <b style={{color: "rgb(97, 83, 83)"}}>Customer</b>
                        </div>
                    </div>
                    <hr />
                    <div className="DOWN">
                        <label className="doSomethin">&ldquo;</label>
                        <br />
                        <span className="yaya" style={{fontFamily: "unset", fontSize: "110%"}}><b>According to the custmers these soaps do not melt that easy, so the lifetime for a single soap is higher when compared to the other brands.</b></span>
                        <br/>
                        <br/ >
                        <label className="doSomethin">&rdquo;</label>
                    </div>
                </div>
            </div>
            <div className="WHOLE" style={{transition: "1s", border: '0.1px solid black'}}>
                <div className="TOP">
                <div className="top">
                        <div className="IMG">
                            <img src={ro} width="100px" height="100px;" alt="avatar"/>
                            <br />
                            <br />
                            <b className="nameTHIS">jois</b>
                            <br />
                            <b>Website Manager</b>
                        </div>
                    </div>
                <hr />
                </div>
                <div className="DOWN">
                        <label className="doSomethin">&ldquo;</label>
                        <br />
                        <span className="yaya" style={{fontFamily: "unset", fontSize: "110%"}}><b>It's hard but, I should accept it, the soaps are really good than what I've made</b></span>
                        <br/>
                        <br/ >
                        <label className="doSomethin">&rdquo;</label>
                </div>
            </div>
        </div>
    </>
    )
}

export default Cards;