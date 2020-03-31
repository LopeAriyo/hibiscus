import React from "react";
import "./Navbar.css";
import HamburgerIcon from "../SideNavbar/HamburgerIcon";

const navbar = props => (
    <header className="navbar">
        <nav className="navbar-navigation">
            <div className="navbar-logo">
                <a href="www.lopeariyo.com"> Lopè Ariyo </a>
            </div>
            <div className="navbar-spacer"></div>
            <div className="navbar-options">
                <ul>
                    <li>
                        {" "}
                        <a href="/">Shop</a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="/">Recipes</a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="/">Reviews</a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="/">Gallery</a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="/">Events</a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="/">Press</a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="/">Enquiries</a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="/">About</a>{" "}
                    </li>
                </ul>
            </div>
            <div className="navbar-hamburger">
                <HamburgerIcon handleClick={props.handleHamburgerClick} />
            </div>
        </nav>
    </header>
);

export default navbar;
