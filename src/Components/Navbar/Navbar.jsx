import React from "react";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from "./leave.jpg";

import "./styles.css";

import { Link, useLocation} from "react-router-dom";

const Navbar = ({ totalItems }) => {
    const location = useLocation();
    return(
        <div classNam="Container">
            <div className="mainBRo">
                <div className="eachh"><Typography component={Link} to="/"><img className="IMAGES" src={logo} alt="logo"/></Typography></div>
                <div className="each">
                        {
                            location.pathname === "/" && (
                                <>
                                <div className="yooooooo">
                                    <li className="bubu">
                                        <IconButton component={Link} to="/checkout" aria-label="Show Cart items">
                                            <Badge badgeContent={totalItems} className="icon">
                                                <ShoppingCartIcon  color="action"/>
                                            </Badge>
                                        </IconButton>
                                    </li>
                                </div>
                                </>
                            )
                        }
                </div>
            </div>
        </div>
    )
}

export default Navbar;