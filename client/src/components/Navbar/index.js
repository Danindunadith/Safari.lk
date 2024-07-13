// components/Navbar/index.js

import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <div className="logoh">
                <NavLink to="/about" >
                        Safari.lk
                    </NavLink>

                    </div>
                <Bars />
                

                <NavMenu>
                    <NavLink to="/about" >
                        Home
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to="/annual" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                    Reservations
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Admin
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;