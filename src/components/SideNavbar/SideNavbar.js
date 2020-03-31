import React from "react";
import "./SideNavbar.css";

const sideNav = props => (
    <nav className="side-navbar-navigation">
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
                    <a href="/">About</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default sideNav;
