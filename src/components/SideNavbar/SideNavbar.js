import React from "react";
import { Link } from "react-router-dom";
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
                        <Link to="/">Book </Link>
                    </li>
                    <li>
                        <Link to="/about">About </Link>
                    </li>
                    <li>
                        <Link to="/videos">Videos </Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery </Link>
                    </li>
                    <li>
                        <Link to="/press">Press</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default sideNav;
