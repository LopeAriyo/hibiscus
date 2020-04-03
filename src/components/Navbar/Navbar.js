import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamburgerIcon from "../SideNavbar/HamburgerIcon";

const navbar = props => (
    <header className="navbar">
        <nav className="navbar-navigation">
            <div className="navbar-logo">
                <div className="navbar-book-title">
                    <a href="/"> Hibiscus </a>
                </div>
                <div className="navbar-book-author">
                    <a href="/"> LOPÈ ARIYO </a>
                </div>
            </div>

            <div className="navbar-spacer"></div>
            <div className="navbar-options">
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
            <div className="navbar-hamburger">
                <HamburgerIcon handleClick={props.handleHamburgerClick} />
            </div>
        </nav>
    </header>
);

export default navbar;
