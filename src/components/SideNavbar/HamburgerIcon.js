import React from "react";

import "./HamburgerIcon.css";

const hamburgerIcon = props => (
    <button className="hamburger-icon" onClick={props.handleClick}>
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
    </button>
);

export default hamburgerIcon;
