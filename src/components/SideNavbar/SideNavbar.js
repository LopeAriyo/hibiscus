import React from "react";
import "./SideNavbar.css";

const sideNav = props => {
    let navClassName = "side-navbar-navigation";

    if (props.visible) {
        navClassName = "side-navbar-navigation open";
    }
    return (
        <nav className={navClassName}>
            <div className="side-navbar-options">
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
};

export default sideNav;
